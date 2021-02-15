import React, { useState } from "react";
import "./App.css";

function App() {
  // useState() results:
  //a) state object (getter)
  // b) updater function (setter)
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
  return (
    //onClick = {functionRef}
    <div className="App">
      <button onClick={handleClick}>{counter}</button>
    </div>
  );
}

export default App;
