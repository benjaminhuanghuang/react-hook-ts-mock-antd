import React, { FC, useState, MouseEvent } from 'react';
import classNames from 'classnames';
import TabItem, { TabItemProps } from './tabItem';

export interface TabProps {
  /**当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /**可以扩展的 className */
  className?: string;
  /**点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /**Tabs的样式，两种可选，默认为 line */
  type?: 'line' | 'card';
}

export const Tabs: FC<TabProps> = (props) => {
  const { defaultIndex, className, type, children, onSelect } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const navClass = classNames('viking-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  const handleClick = (e: MouseEvent, index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };

  var renderNavLinks = function () {
    return React.Children.map(children, function (child, index) {
      var childElement = child as React.FunctionComponentElement<TabItemProps>;;
      const {label, disabled=false} = childElement.props;

      const classes = classNames('viking-tabs-nav-item', {
        'is-active': activeIndex === index,
        disabled: disabled,
      });

      return (
        <li
          className={classes}
          key={`'nav-item-${index}`}
          onClick={(e: MouseEvent<HTMLElement>) => handleClick(e, index, disabled)}
        >
          {label}
        </li>
      );
    });
  };

  var renderContent = function () {
    return React.Children.map(children, function (child, index) {
      if (index === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={'viking-tabs ' + className}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="viking-tabs-content"> {renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line',
};

export default Tabs;
