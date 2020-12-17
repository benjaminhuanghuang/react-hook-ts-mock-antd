import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [like, setLike] = useState(0);

  const likeRef = useRef(0);

  useEffect(() => {
    document.title = `click ${like} times`;
  }, [like]);

  function handleAlertClick() {
    setTimeout(() => {
      // How to alert the latest value of like?
      alert("you clicked " + likeRef.current);
    }, 3000);
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like}
      </button>
      <button onClick={handleAlertClick}>Alert</button>
    </div>
  );
}
