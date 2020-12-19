import React, {useState} from 'react';
//
import Transition from './components/Transition/transition';

function App() {

  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>Toggle</button>
      <Transition in ={show} timeout={300} animation="zoom-in-left">
        <div>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
      </Transition>
    </div>
  );
}

export default App;
