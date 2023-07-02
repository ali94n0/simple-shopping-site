import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import Styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={Styles.container}>
      <img src={productData.image} alt="product" className={Styles.cardImage} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={Styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={Styles.buttonContainer}>
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
              className={Styles.smallButton}
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              add in cart
            </button>
          )}
          {isInCart(state, productData.id) &&
            quantityCount(state, productData.id) > 0 && (
              <span className={Styles.counter}>
                {quantityCount(state, productData.id)}
              </span>
            )}

          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
              className={Styles.smallButton}
            >
              <BiTrash className={Styles.trashIcon} />
            </button>
          )}

          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
              className={Styles.smallButton}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
