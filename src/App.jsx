import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <nav className="p-5 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default App;
