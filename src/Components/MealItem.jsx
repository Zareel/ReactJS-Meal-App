import React from "react";

const MealItem = ({ title, image, category, area }) => {
  return (
    <div className="max-w-xs rounded-md  text-gray-100">
      <img
        src={image}
        alt={title}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6  bg-gray-900">
        <div className="flex flex-col items-start ">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{category}</p>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
