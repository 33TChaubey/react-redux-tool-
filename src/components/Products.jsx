import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";
import ProductReducer from "../store/reducers/ProductReducer";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);
  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-500">Product List</h1>
      {products.map((product, index) => (
        <li style={{ listStyle: "none" }}>
          <h1>
            {product.title}
            <span className=" px-2 text-red-500 font-bold cursor-pointer">
              X
            </span>
          </h1>
        </li>
      ))}
    </div>
  );
};

export default Products;
