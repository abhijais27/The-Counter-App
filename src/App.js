import "./App.css";
import React, { useState } from "react";

function App() {
  const [Count, setCount] = useState(25);
  let myAge = 25;
  console.log(myAge);
  return (
    <>
      <h2 style={{ color: "blue" }}>{Count}</h2>;
      <button onClick={() => setCount(Count + 1)}> +</button>
      <button onClick={() => setCount(Count - 1)}> -</button>
    </>
  );
}
export default App;
