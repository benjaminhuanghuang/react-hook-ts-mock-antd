import React,{useState} from "react";
//
import DogShow, {ShowRestul} from './components/DogShow';
import useURLLoader from './hooks/useURLLoader';


export default function App() {
  const [show, setShow] = useState(true);
  const [data, isLoading] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show]);
  const dogResult = data as ShowRestul;

  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>Trigger</button>
      {isLoading || !data ? (
            <p>Data is loading</p>
          ) : (
            <DogShow data={dogResult}></DogShow>
          )}
    </div>
  );
}
