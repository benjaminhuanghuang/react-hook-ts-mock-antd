import React, { FC, useState, createContext, CSSProperties } from 'react';
import classNames from 'classnames';
import { TabItemProps } from './tabItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

export interface TabProps {
  defaultIndex?: string; // the active item
  label: 'string'
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}

interface ITabContext {
  index: string;
  onSelect?: SelectCallback;
}

export const TabContext = createContext<ITabContext>({ index: '0' });


export const Tab: FC<TabProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
  } = props;
  // set active menu item
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  
  const passedContext: ITabContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
  };

  // Filter the children of the Menu and add 'index' property to MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(), // create index
        });
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <TabContext.Provider value={passedContext}>
        {renderChildren()}
      </TabContext.Provider>
    </ul>
  );
};

Tab.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
};

export default Tab;
