import React, { useState, createContext, useContext } from "react";
//

interface ThemeProps {
  [key: string]: { color: string; background: string };
}

const theme: ThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};


const ThemeContext = createContext(theme.light);


const App: React.FC = () => {

  return (
    <ThemeContext.Provider value={theme.light}>
        <LikeButton/>
    </ThemeContext.Provider>
  )
};


const LikeButton: React.FC =() =>{
  const theme = useContext(ThemeContext);
  const style ={
    background : theme.background,
    color : theme.color
  }


  return (
    <button style={style}>
      Like
    </button>
  )
}


export default App;
