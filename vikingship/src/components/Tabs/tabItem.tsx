import React, { useContext } from 'react'
import classNames from 'classnames'
import { TabContext } from './tabs'

export interface TabItemProps {
  index?: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { index, disabled, className, style, children } = props

  // context context the information from menu
  const context = useContext(TabContext)

  const classes = classNames('tab-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

// TabItem.label = 'TabItem'


export default TabItem