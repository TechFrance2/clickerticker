import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </div>
  );
}

export default App;
