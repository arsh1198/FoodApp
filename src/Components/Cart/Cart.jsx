import * as React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Title = styled.h3``;
const CartItems = styled.div`
  flex-grow: 1;
`;
const Total = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-direction: center;
  font-weight: 600;
  font-size: 1.15rem;
`;

const Button = styled.div`
  padding: 0.25em 1em;
  background: ${(props) => (props.primary ? "var(--crim)" : "var(--white)")};
  color: ${(props) => (props.primary ? "var(--white)" : "var(--crim)")};
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 0.5em;
  border: ${(props) =>
    props.primary ? "2px solid transparent" : "2px solid var(--crim)"};
`;

const Actions = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Cart = ({ isShown, onClose }) => {
  React.useLayoutEffect(() => {
    if (isShown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isShown]);

  if (!isShown) return null;

  return (
    <Modal>
      <Container>
        <Title>Checkout!</Title>
        <CartItems>CartItems</CartItems>
        <Total>
          <p>Total</p>
          <p>$69.99</p>
        </Total>
        <Actions>
          <Button onClick={onClose}>Close</Button>
          <Button primary style>
            Checkout
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default Cart;
