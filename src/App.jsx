import * as React from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isCartShown, setIsCartShown] = React.useState(false);

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <Cart isShown={isCartShown} onClose={hideCart} />
        <Header showCart={showCart} />
        <Meals />
      </CartProvider>
    </div>
  );
}

export default App;
