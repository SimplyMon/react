import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./components/screen/HomePage";
import CheckoutPage from "./components/screen/CheckoutPage";
import OrderPage from "./components/screen/OrderPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
