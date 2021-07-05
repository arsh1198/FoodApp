import * as React from "react";
import styled from "styled-components";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
`;
const Meals = () => {
  return (
    <Container>
      <MealSummary />
      <AvailableMeals />
    </Container>
  );
};

export default Meals;
