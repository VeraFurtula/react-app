import { useState } from "react";
import NavBar from "./components/NavBav";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
