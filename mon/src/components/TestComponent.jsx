import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function dagdag() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={dagdag}>{count}</button>
    </>
  );
}

export default Counter;
