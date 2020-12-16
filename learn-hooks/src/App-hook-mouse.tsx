import React from "react";
//
import useMousePosition from "./hooks/useMousePosition";

export default function App() {
  const pos = useMousePosition();
  return (
    <div className="App">
      <h2>
        X:{pos.x}, Y:{pos.y}
      </h2>
    </div>
  );
}
