import React, { createContext, useReducer } from "react";

const initialValue = {
  selectedItems: [],
  itemsCount: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCount = items.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = items
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCount, totalPrice };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        checkout: false,
        ...sumItems(newSelectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;

      return { ...state, ...sumItems(state.selectedItems), checkout: false };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;

      return { ...state, ...sumItems(state.selectedItems), checkout: false };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCount: 0,
        totalPrice: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCount: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
