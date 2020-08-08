import React from "react";
import logo from "./logo.svg";

import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";

import "./App.css";

function App() {
  const pos = useMousePosition();
  const [data, loading] = useURLLoader("https://");
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          X:{pos.x}, Y:{pos.y}
        </h2>

        {loading ? <p>Loading...</p> : <img src={data.message}/>}
      </header>
    </div>
  );
}

export default App;
