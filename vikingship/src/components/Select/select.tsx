import React, {
  FC,
  useState,
  createContext,
  useRef,
  useEffect,
  MouseEvent,
} from 'react';
import classNames from 'classnames';
import Input from '../Input';
import Icon from '../Icon';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from '../Transition/transition';

import { SelectOptionProps } from './option';

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
  onSelect?: (value: string, isSelected: boolean) => void;
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
    children,
  } = props;

  const input = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useRef(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [menuOpen, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  var handleOptionClick = function (value: string, isSelected: boolean) {
    // update value
    if (!multiple) {
      setOpen(false);
      setValue(value);
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    } else {
      setValue('');
    }
    var updatedValues = [value];
    // click again to remove selected when is multiple mode
    if (multiple) {
      updatedValues = isSelected
        ? selectedValues.filter(function (v) {
            return v !== value;
          })
        : [...selectedValues, value];
      setSelectedValues(updatedValues);
    }
    if (onChange) {
      onChange(value, updatedValues);
    }
  };
  useEffect(
    function () {
      // focus input
      if (input.current) {
        input.current.focus();
        if (multiple && selectedValues.length > 0) {
          input.current.placeholder = '';
        } else {
          if (placeholder) input.current.placeholder = placeholder;
        }
      }
    },
    [selectedValues, multiple, placeholder]
  );
  useEffect(function () {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width;
    }
  });
  useClickOutside(containerRef, function () {
    setOpen(false);
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false);
    }
  });

  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple,
  };

  var handleClick = function (e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (!disabled) {
      setOpen(!menuOpen);
      if (onVisibleChange) {
        onVisibleChange(!menuOpen);
      }
    }
  };
  var generateOptions = function () {
    return React.Children.map(children, function (child, i) {
      var childElement = child as React.FunctionComponentElement<
        SelectOptionProps
      >;
      if (childElement.type.displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: 'select-' + i,
        });
      } else {
        console.error(
          'Warning: Select has a child which is not a Option component'
        );
      }
    });
  };
  var containerClass = classNames('viking-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple,
  });
  return (
    <div className={containerClass} ref={containerRef}>
      <div className="viking-select-input" onClick={handleClick}>
        <Input
          ref={input}
          placeholder={placeholder}
          value={value}
          readOnly
          icon="angle-down"
          disabled={disabled}
          name={name}
        ></Input>
        <SelectContext.Provider value={passedContext}>
          <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
            <ul className="viking-select-dropdown">{generateOptions()}</ul>
          </Transition>
          {multiple && (
            <div
              className="viking-selected-tags"
              style={{ maxWidth: containerWidth.current - 32 }}
            >
              {selectedValues.map((value, index) => {
                return (
                  <span className="viking-tag" key={'tag-' + index}>
                    {value}
                    <Icon
                      icon="times"
                      onClick={() => handleOptionClick(value, true)}
                    />
                  </span>
                );
              })}
            </div>
          )}
        </SelectContext.Provider>
      </div>
    </div>
  );
};

Select.defaultProps = {
  name: 'viking-select',
  placeholder: '请选择',
};

export default Select;
