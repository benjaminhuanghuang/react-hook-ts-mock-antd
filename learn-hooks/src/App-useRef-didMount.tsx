import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [like, setLike] = useState(0);

  const didMount = useRef(false);

  useEffect(() => {
    document.title = `click ${like} times`;
  }, [like]);

  useEffect(() => {
    if (didMount.current) {
      console.log("is updateed");
    } else {
      didMount.current = true;
    }
  });

  return (
    <div className="App">
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
