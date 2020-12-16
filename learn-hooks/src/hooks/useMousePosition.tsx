import React, { useState, useEffect } from "react";

const useMousePositon = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      console.log("upate pos");
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updatePos);
    // 每次渲染前会clean前一个effect
    return () => {
      document.removeEventListener("mousemove", updatePos);
    };
  }, []);

  return pos;
};

export default useMousePositon;
