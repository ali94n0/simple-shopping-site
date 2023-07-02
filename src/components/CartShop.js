import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import Cart from "./shared/Cart";
import Styles from "./CartShop.module.css";

function CartShop(props) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCount > 0 && (
        <div className={Styles.payments}>
          <p>
            <span>Total Items : </span>
            {state.itemsCount}
          </p>
          <p>
            <span>Total Payment : </span>
            {state.totalPrice}
          </p>
          <div className={Styles.buttonContainer}>
            <button
              onClick={() => dispatch({ type: "CHECKOUT" })}
              className={Styles.checkout}
            >
              Check out
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className={Styles.clear}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={Styles.complete}>
          <h3>Check Out Successfully</h3>
          <Link to="/products">Buy More?</Link>
        </div>
      )}
      {!state.checkout && state.itemsCount === 0 && (
        <div className={Styles.complete}>
          <h3>Want to Buy ?</h3>
          <Link to="/products">Back to Shop</Link>
        </div>
      )}
    </div>
  );
}

export default CartShop;
