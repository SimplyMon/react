import { Routes, Route } from "react-router";

import HomePage from "./components/screen/HomePage";
import CheckoutPage from "./components/screen/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
