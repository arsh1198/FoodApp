import * as React from "react";
import { createContext, useReducer } from "react";

const initialState = {
  cartItems: [],
  status: "loading",
};

const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != action.itemID),
      };
    default:
      throw new Error("Something went Wrong!");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const addToCart = (cartItem) => {
    dispatch({ type: actionTypes.ADD_TO_CART, cartItem });
  };

  const removeFromCart = (itemID) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, itemID });
  };

  const value = { state, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
