import React, { FC, useState, createContext, CSSProperties } from 'react';
import classNames from 'classnames';
import { TabItemProps } from './tabItem';

type TabMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

export interface TabProps {
  defaultIndex?: number; // the active item
  label?: 'string'
  className?: string;
  mode?: TabMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}

interface ITabContext {
  index: number;
  onSelect?: SelectCallback;
}

export const TabContext = createContext<ITabContext>({ index: 0 });


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

  const classes = classNames('viking-tab', className, {
    'tab-vertical': mode === 'vertical',
    'tab-horizontal': mode !== 'vertical',
  });
  
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  
  const passedContext: ITabContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };

  // Filter the children of the Menu and add 'index' property to subItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, {
          index: index, // create index
        });
      } else {
        console.error(
          'Warning: Menu has a child which is not a TabItem component'
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-tab">
      <TabContext.Provider value={passedContext}>
        {renderChildren()}
      </TabContext.Provider>
    </ul>
  );
};

Tab.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Tab;
