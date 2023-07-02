import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { useParams, Link } from "react-router-dom";
import Styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const data = useContext(ProductsContext);

  const { id } = useParams();
  const item = data[id - 1];
  const { title, image, price, category, description } = item;

  return (
    <div className={Styles.container}>
      <img src={image} alt={title} style={{ width: "400px" }}></img>
      <div className={Styles.textContainer}>
        <h3>{title}</h3>
        <p className={Styles.description}>{description}</p>
        <p className={Styles.category}>
          <span>Category : </span>
          {category}
        </p>
        <div className={Styles.buttonContainer}>
          <span className={Styles.price}>{price}</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
