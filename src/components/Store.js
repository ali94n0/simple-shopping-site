import React, { useContext } from "react";
import Styles from "./Store.module.css";

// Components
import Product from "./shared/Product";

// Context
import { ProductsContext } from "../context/ProductsContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={Styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
