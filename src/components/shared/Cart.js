import React from "react";
import { shorten } from "../../helper/functions";
// import { CartContext } from "../../context/CartContextProvider";
import { BiTrash } from "react-icons/bi";
import Styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../redux/cards/cardAction";

function Cart(props) {
  const { image, title, quantity, price } = props.data;
  const dispatch = useDispatch();
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
        <button onClick={() => dispatch(increase(props.data))}>+</button>
        {quantity === 1 ? (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <BiTrash className={Styles.trashIcon} />
          </button>
        ) : (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        )}
      </div>
    </div>
  );
}

export default Cart;
