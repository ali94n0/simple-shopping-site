import React from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContextProvider";
import Styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../redux/cards/cardAction";
import { BiTrash } from "react-icons/bi";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

const Product = ({ productData }) => {
  // const { state, dispatch } = useContext(CartContext);
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.card);
  return (
    <div className={Styles.container}>
      <img src={productData.image} alt="product" className={Styles.cardImage} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={Styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={Styles.buttonContainer}>
          {isInCart(cardState, productData.id) ? (
            <button
              onClick={() => dispatch(increase(productData))}
              className={Styles.smallButton}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              add in cart
            </button>
          )}
          {isInCart(cardState, productData.id) &&
            quantityCount(cardState, productData.id) > 0 && (
              <span className={Styles.counter}>
                {quantityCount(cardState, productData.id)}
              </span>
            )}

          {quantityCount(cardState, productData.id) === 1 && (
            <button
              onClick={() => dispatch(removeItem(productData))}
              className={Styles.smallButton}
            >
              <BiTrash className={Styles.trashIcon} />
            </button>
          )}

          {quantityCount(cardState, productData.id) > 1 && (
            <button
              onClick={() => dispatch(decrease(productData))}
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
