// import React, { useContext } from "react";
import { useEffect } from "react";
import fetchProducts from "../redux/products/productsAction";
import Styles from "./Store.module.css";

// Components
import Product from "./shared/Product";

// Context
// import { ProductsContext } from "../context/ProductsContextProvider";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const productsState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={Styles.container}>
      {productsState.loading ? (
        <h2>Loading...</h2>
      ) : productsState.error ? (
        <h3>{productsState.error}</h3>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
