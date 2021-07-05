import * as React from "react";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Button = styled.div`
  padding: 0.25em 1em;
  background: var(--crim);
  color: var(--white);
  border-radius: 25px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Input = styled.input`
  width: 50px;
  text-align: center;
`;
const MealsForm = ({ meal }) => {
  const { addToCart } = React.useContext(CartContext);
  console.log(addToCart);

  const onAddToCart = () => {
    addToCart(meal);
  };

  return (
    <Container>
      <Input type="number" min={1} max={10} defaultValue={1} />
      <Button onClick={onAddToCart}>Add</Button>
    </Container>
  );
};

export default MealsForm;
