import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Categories from "./Components/Categories";
import RandomMeal from "./Components/RandomMeal";
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/random" element={<RandomMeal />}></Route>
      </Route>
    )
  );
  return (
    <div className="w-full h-full bg-[#111111] text-white text-center">
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
