import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Всe",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
