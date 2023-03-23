import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

export const myContext = createContext();

const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const fetchHomePageMeals = useCallback((search) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);

  const fetchRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandomMeal(res.data.meal);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategories,
        categories,
        fetchRandomMeal,
        randomMeal,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default AppContext;
