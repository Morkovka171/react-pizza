import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Categories,
  Sort,
  PizzaBlock,
  Skeleton,
  Pagination,
} from "../components";

import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzaSlice";
import PizzasError from "../components/PizzasError";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj) => (
    <Link key={obj.id} to={`pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <PizzasError />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
