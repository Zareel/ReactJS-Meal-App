import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "./Contex";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="flex justify-center items-center gap-10 flex-wrap py-10">
      {categories.map((item) => {
        return (
          <div key={item.idCategory}>
            <img
              className="w-[180px] transition-all duration-300 ease-in hover:-mt-2 cursor-pointer "
              src={item.strCategoryThumb}
              alt={item.strCategory}
            />
            <h4>{item.strCategory}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
