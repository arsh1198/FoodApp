import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section `
width: 550px;
height: 270px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 1.5em;
background-color: var(--white);
border-radius: 15px;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
margin-top: -8em;
text-align: center;
h1{
    text-decoration: underline;
    font-family: OtomanopeeOne-Regular;
    margin-bottom: 1em;
}
P{
    font-family: VarelaRound-Regular;
}
`

const MealSummary = () => {
    return <Container>
        <h1>
            Delecious Food Delivered to Your Doorstep!
        </h1>
        <p>
            Choose Your favourite Meal From Our Broad Range of Meals, enjoy it where ever you want! 
        </p>
        <p>
            Our Meals are Cooked using Quality Ingredients, Just in Time! and ofcourse by Experienced Chefs! 
        </p>
    </Container>
}

export default MealSummary