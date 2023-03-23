import React from "react";
import { useEffect, useContext } from "react";
import { myContext } from "./Contex";

const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <div className="random max-w-6xl mx-auto h-full flex flex-col justify-center items-center gap-10  ">
      {randomMeal &&
        randomMeal.map((item) => {
          return (
            <div key={item.idMeal} className="random-grid">
              <div className="flex flex-col justify-center items-center ">
                <img
                  className="w-[250px]"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <button
                  onClick={fetchRandomMeal}
                  className="py-2 px-4 bg-orange-500 mt-8 rounded-sm"
                >
                  Generate another Meal
                </button>
              </div>
              <div className="random-grid-instructions">
                <h4 className="text-center text-lg font-semibold">
                  Instructions
                </h4>
                <p>{item.strInstructions}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RandomMeal;
