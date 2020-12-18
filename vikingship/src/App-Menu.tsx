import React from "react";
//
import Menu from "./components/Menu";
import SubMenu from "./components/Menu/subMenu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}} mode='vertical' defaultOpenSubMenus={['2']}>
        <MenuItem>Cool link</MenuItem>
        <MenuItem disabled>Cool link 2</MenuItem>

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
