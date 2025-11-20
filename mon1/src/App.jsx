import { Routes, Route } from "react-router";
import HomePage from "./components/screen/HomePage";
import CheckoutPage from "./components/screen/CheckoutPage";
import OrderPage from "./components/screen/OrderPage";

import HeaderComponent from "./components/layout/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
