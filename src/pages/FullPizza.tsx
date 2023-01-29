import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63c04ab1a177ed68abc42df0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пицц");
        navigate("");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка</>;
  }

  return (
    <div className="container">
      <div className="fullPizza_content">
        <img src={pizza.imageUrl} className="fullPizza_img" alt="Pizza" />
        <h2 className="pizza-block__title">{pizza.title}</h2>
        <h4 className="pizza-block__price full-pizza__price">
          {pizza.price} ₽
        </h4>
        <Link to="/">
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
