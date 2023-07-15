import React from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContextProvider";
import Cart from "./shared/Cart";
import Styles from "./CartShop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkout, clear } from "../redux/cards/cardAction";

function CartShop(props) {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.card);

  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {cardState.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {cardState.itemsCount > 0 && (
        <div className={Styles.payments}>
          <p>
            <span>Total Items : </span>
            {cardState.itemsCount}
          </p>
          <p>
            <span>Total Payment : </span>
            {cardState.totalPrice}
          </p>
          <div className={Styles.buttonContainer}>
            <button
              onClick={() => dispatch(checkout())}
              className={Styles.checkout}
            >
              Check out
            </button>
            <button onClick={() => dispatch(clear())} className={Styles.clear}>
              Clear
            </button>
          </div>
        </div>
      )}
      {cardState.checkout && (
        <div className={Styles.complete}>
          <h3>Check Out Successfully</h3>
          <Link to="/products">Buy More?</Link>
        </div>
      )}
      {!cardState.checkout && cardState.itemsCount === 0 && (
        <div className={Styles.complete}>
          <h3>Want to Buy ?</h3>
          <Link to="/products">Back to Shop</Link>
        </div>
      )}
    </div>
  );
}

export default CartShop;
