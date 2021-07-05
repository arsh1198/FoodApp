import * as React from "react";
import styled from "styled-components";
import CartButton from "./CartButton";

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--crim);
  padding: 0.5em 10em;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
  h1 {
    color: var(--white);
    font-family: OtomanopeeOne-Regular;
  }
`;
const Banner = styled.div`
  height: 400px;
  background: url("https://rs.projects-abroad.net/v1/hero/indian-cuisine-south-africa-food-tours-product-5e146c7a97eb2.[1600].jpeg");
`;

const Header = ({ showCart }) => {
  return (
    <React.Fragment>
      <TopBar>
        <h1>Yummato</h1>
        <CartButton onClick={showCart} />
      </TopBar>
      <Banner />
    </React.Fragment>
  );
};

export default Header;
