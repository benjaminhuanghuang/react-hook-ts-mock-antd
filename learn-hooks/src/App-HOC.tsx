import React from "react";
//
import DogShow from './components/DogShow';
import withLoader from './hoc/withLoader';


export default function App() {
  const HOCDogShow = withLoader(DogShow, "https://dog.ceo/api/breeds/image/random")
  
  return (
    <div className="App">
      <HOCDogShow/>
    </div>
  );
}
