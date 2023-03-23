import React from "react";
import MealItem from "./MealItem";
import { useState, useCallback, useContext } from "react";
import { myContext } from "./Contex";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealHandler = useCallback(() => {
    fetchHomePageMeals(search);
  }, [search, fetchHomePageMeals]);

  return (
    <div className="w-full min-h-[100vh] h-auto bg-[#111111] py-16">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <h1 className="text-7xl font-semibold font-roboto pb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-700">
            Search for Your Meal
          </h1>
          <p className="font-poppins text-md text-gray-400 tracking-wide py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            aliquid, cupiditate quos molestias optio in.
          </p>
          <div className="relative">
            <input
              className="w-full bg-[#222222] px-6 py-4 rounded-sm mt-10 mb-10 border-none outline-none font-poppins tracking-widest cursor-pointer"
              type="text"
              placeholder="Search your Meal here...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-14 right-10 text-gray-300 cursor-pointer"
              onClick={fetchMealHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-full mt-10 flex justify-center items-center gap-10 flex-wrap ">
            {meals ? (
              meals.map((item) => {
                return (
                  <div key={item.idMeal} className="cursor-pointer">
                    <MealItem
                      title={item.strMeal}
                      image={item.strMealThumb}
                      category={item.strCategory}
                      area={item.strArea}
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <h2>Meals not found. Search anthor one</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
