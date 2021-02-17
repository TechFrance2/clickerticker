import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const incrementCounter5 = () => setCounter(counter + 5);
  const incrementCounter10 = () => setCounter(counter + 10);
  const incrementCounter100 = () => setCounter(counter + 100);

  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter5} increment={5} />
      <Button onClickFunction={incrementCounter10} increment={10} />
      <Button onClickFunction={incrementCounter100} increment={100} />
      <Display message={counter} />
    </div>
  );
}

export default App;
