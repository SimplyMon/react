import { Routes, Route } from "react-router";

import HomePage from "./components/screen/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<div>Hello</div>} />
    </Routes>
  );
}

export default App;
