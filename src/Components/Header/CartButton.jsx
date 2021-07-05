import * as React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Background = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 0.6em;
  cursor: pointer;
  font-size: 0.8rem;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  background-color: var(--white);
  border-radius: 50px;
  padding: 0.25em;
`;
const Text = styled.p`
  color: var(--white);
  padding: 0 1em 0 0.5em;
`;

const CartButton = (props) => {
  return (
    <Background {...props}>
      <FaShoppingCart size={18} style={{ color: "var(--white)" }} />
      <Text>Your Cart</Text>
      <Count>3</Count>
    </Background>
  );
};

export default CartButton;
