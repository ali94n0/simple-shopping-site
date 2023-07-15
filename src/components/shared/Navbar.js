import React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
// import { CartContext } from "../../context/CartContextProvider";
import Styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

function Navbar(props) {
  const cardState = useSelector((state) => state.card);
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <Link to="/products" className={Styles.productLink}>
          Products
        </Link>
        <div className={Styles.iconContainer}>
          <Link to="/cart">
            <BiCartAlt className={Styles.icon} />
            <span>{cardState.itemsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
