import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from "../../context/CartContextProvider";
import Styles from "./Navbar.module.css";

function Navbar(props) {
  const { state } = useContext(CartContext);
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <Link to="/products" className={Styles.productLink}>
          Products
        </Link>
        <div className={Styles.iconContainer}>
          <Link to="/cart">
            <BiCartAlt className={Styles.icon} />
            <span>{state.itemsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
