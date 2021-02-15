import React, { useState } from "react";
import "./App.css";

function App() {
  // useState() results:
  //a) state object (getter)
  // b) updater function (setter)
  const [counter, setCounter] = useState(0);
  return (
    //onClick = {functionRef}
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}

export default App;
