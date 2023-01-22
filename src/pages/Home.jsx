import React, { useRef } from "react";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Categories,
  Sort,
  PizzaBlock,
  Skeleton,
  Pagination,
} from "../components";
import { SearchContext } from "../App";
import { sortList } from "../components/Sort";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import PizzasError from "../components/PizzasError";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.pizza);
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );

  const { seacrhValue } = React.useContext(SearchContext);

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
    )

  window.scrollTo(0, 0);
};


  React.useEffect(() => {
    getPizzas();
    console.log('Запускается getPizzas');
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

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
      {
        status === 'error'
          ? <PizzasError />
          : <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      }
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
