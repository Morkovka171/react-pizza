import React from "react";

const PizzasError:React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Техническая ошибка <span>😕</span>
        </h2>
        <p>
          К сожалению не удалось получить питсы
          <br />
          Наши специалисты уже работают над этим
        </p>
      </div>
    </>
  );
};

export default PizzasError;
