import React, { FC, useState, createContext, useRef, useEffect } from 'react';

import classNames from 'classnames';
import Input from '../Input';
import Icon from '../Icon';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from '../Transition/transition';

export interface SelectProps {
  /**指定默认选中的条目	 可以是是字符串或者字符串数组*/
  defaultValue?: string | string[];
  /** 选择框默认文字*/
  placeholder?: string;
  /** 是否禁用*/
  disabled?: boolean;
  /** 是否支持多选*/
  multiple?: boolean;
  /** select input 的 name 属性	 */
  name?: string;
  /**选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /**下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void;
}
export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}
export const SelectContext = createContext<ISelectContext>({
  selectedValues: [],
  multiple: false,
});

/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'vikingship'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */

const Select: FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    disabled,
    multiple,
    name,
    onChange,
    onVisibleChange,
  } = props;

  return <div></div>;
};
export default Select;
