import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
//
import Icon from './components/Icon/icon';
// import all icons
library.add(fas)

function App() {
  return (
    <div className="App">
        <Icon icon="coffee" theme="danger" size="10x"></Icon>
    </div>
  );
}

export default App;
