import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./components/screen/HomePage";
import CheckoutPage from "./components/screen/CheckoutPage";
import OrderPage from "./components/screen/OrderPage";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const response = await axios.get("api/cart-items?expand=product");
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} loadCart={loadCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} loadCart={loadCart} />}
        />
        <Route path="/orders" element={<OrderPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
