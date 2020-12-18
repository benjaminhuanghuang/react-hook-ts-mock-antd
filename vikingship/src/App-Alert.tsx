import React from 'react';
//
import Alert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <Alert
        closable
        description="this is a long description"
        onClose={function noRefCheck() {}}
        title="提示标题欧亲"
        type="default"
      />
    </div>
  );
}

export default App;
