import React from "react";
//
import Menu from "./components/Menu";
import SubMenu from "./components/Menu/subMenu";
import MenuItem from "./components/Menu/menuItem";

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
//
import Icon from './components/Icon/icon';
// import all icons
library.add(fas)
function App() {
  return (
    <div className="App">
       <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}}>
        <MenuItem>Cool link</MenuItem>
        <MenuItem disabled>Cool link 2</MenuItem>
        <MenuItem>Cool link 3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem disabled>Cool link 3</MenuItem>
      </Menu>

      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}} mode='vertical' defaultOpenSubMenus={['3']}>
        <MenuItem>Cool link</MenuItem>
        <MenuItem disabled>Cool link 2</MenuItem>
        <MenuItem>Cool link 3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem disabled>Cool link 3</MenuItem>
      </Menu>
    </div>
  ); 
}

export default App;
