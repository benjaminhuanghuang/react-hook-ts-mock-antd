import React, {
  useEffect,
  ReactElement,
  ChangeEvent,
  KeyboardEvent,
  FC,
  useState,
} from 'react';
import classNames from 'classnames'
//
import Input, { InputProps } from '../Input/input';
import Icon from '../Icon/icon';
import useDoubance from '../../hooks/useDebounce';

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = any> = DataSourceObject & T;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState<string>(value as string);
  const [suggestions, setSuiggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Support Keyboard
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const debouncedValue = useDoubance(inputValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      const result = fetchSuggestions(inputValue);
      if (result instanceof Promise) {
        setLoading(true);
        result.then((data) => {
          setSuiggestions(data);
          setLoading(false);
        });
      } else {
        setSuiggestions(result);
      }
    } else {
      setSuiggestions([]);
    }
  }, [debouncedValue]);

  const highligh = (index: number)=>{

    if(index < 0)
      index =0;
    if(index>=suggestions.length)
      index = suggestions.length -1;
    setHighlightIndex(index);
  }
  //
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    console.log('Key  code', e.key, e.code);
    switch (e.key) {
      case 'Enter':
        break;

      case 'Escape':
        break;

      case 'ArrowDown':
        highligh(highlightIndex + 1);
        break;

      case 'ArrowUp':
        highligh(highlightIndex -1);
        break;

      default:
        break;
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuiggestions([]);
    if (onSelect) {
      onSelect(item);
    }
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames({
            'item-highlighted' : index === highlightIndex
          })
          return (
            <li key={index} className = {cnames} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="viking-auto-complete">
      <Input
        value={value}
        onChange={handleChange}
        {...restProps}
        onKeyDown={handleKeyDown}
      />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {suggestions.length > 0 && generateDropDown()}
    </div>
  );
};

export default AutoComplete;
