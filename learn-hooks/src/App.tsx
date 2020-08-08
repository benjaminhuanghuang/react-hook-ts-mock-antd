import React from "react";
import logo from "./logo.svg";

import useMousePosition from "./hooks/useMousePosition";

import "./App.css";

function App() {
  const pos = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          X:{pos.x}, Y:{pos.y}
        </h2>
      </header>
    </div>
  );
}

export default App;
