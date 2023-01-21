import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  let finalCart;

  if (showCart) {
    finalCart = <Cart onClose={closeCartHandler} />;
  }
  return (
    <CartProvider>
      {finalCart}
      <Header cartHandler={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
