import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63c04ab1a177ed68abc42df0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пицц");
      }
    }
    fetchPizza();
  }, []);
  
  if (!pizza){
    return"Загрузка";
  }

  return (
    <div className="container fullPizza_container">
      <div className="fullPizza_content">
      <img src={pizza.imageUrl} className="fullPizza_img" alt="Pizza" />
      <h2 className="pizza-block__title">{pizza.title}</h2>
      <h4 className="pizza-block__price">{pizza.price} ₽</h4>
      </div>
    </div>
  );
};

export default FullPizza;
