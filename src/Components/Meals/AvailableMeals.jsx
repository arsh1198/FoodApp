import * as React from "react";
import styled from "styled-components";
import MealsForm from "./MealsForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Container = styled.section`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5em;
  background-color: var(--grey);
  border-radius: 15px;
  margin-top: 3em;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MealListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background: var(--white);
  padding: 1.5em;
`;

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal, index) => (
    <MealListItem
      style={{ marginTop: index === 0 ? 0 : ".75rem" }}
      key={meal.id}
    >
      <InfoContainer>
        <p style={{ fontWeight: 800 }}>{meal.name}</p>
        <p>{meal.description}</p>
        <p style={{ color: "green" }}>{`$ ${meal.price}`}</p>
      </InfoContainer>
      <MealsForm meal={meal} />
    </MealListItem>
  ));

  return <Container>{MealsList}</Container>;
};

export default AvailableMeals;
