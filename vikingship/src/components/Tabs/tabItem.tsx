import React from 'react';
export interface TabItemProps {
  /** Tab选项上面的文字 */
  label: string | React.ReactElement;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const {
    children
  } = props;
  return (
    <div className="viking-tab-panel">
        {children}
    </div>
  );
};

TabItem.displayName = 'TabItem';

TabItem.defaultProps = {
  disabled: false
};

export default TabItem;
