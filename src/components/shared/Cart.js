import React, { useContext } from "react";
import { shorten } from "../../helper/functions";
import { CartContext } from "../../context/CartContextProvider";
import { BiTrash } from "react-icons/bi";
import Styles from "./Cart.module.css";

function Cart(props) {
  const { image, title, quantity, price } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className={Styles.container}>
      <img src={image} alt={title} className={Styles.productImage}></img>
      <div className={Styles.data}>
        <h3>{shorten(title)}</h3>
        <span>{price} $</span>
      </div>
      <div className={Styles.quantity}>
        <span>{quantity}</span>
      </div>
      <div className={Styles.buttonContainer}>
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
        {quantity === 1 ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <BiTrash className={Styles.trashIcon} />
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
