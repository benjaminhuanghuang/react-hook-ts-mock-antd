import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [like, setLike] = useState(0);

  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });

  return (
    <div className="App">
      <input type="text" ref={domRef}></input>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}
      </button>
    </div>
  );
}
