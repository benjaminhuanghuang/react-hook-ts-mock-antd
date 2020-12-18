import React from 'react';
//
import Button, {ButtonType, ButtonSize } from './components/Button/button'


function App() {
  return (
    <div className="App">
      <Button>Hellos</Button>
      <Button disabled>Hellos</Button>
      <Button btnType="primary" size="lg" >Hellos</Button>
      <Button btnType="link" href="google.com" >Hellos</Button>
      <Button btnType="link" href="google.com" disabled>Hellos</Button>
    </div>
  );
}

export default App;
