import React, {
  useEffect,
  ReactElement,
  ChangeEvent,
  KeyboardEvent,
  FC,
  useState,
  useRef,
} from 'react';
import classNames from 'classnames';
//
import Input, { InputProps } from '../Input/input';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';
import useDoubance from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';

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
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [ showDropdown, setShowDropdown] = useState(false)

  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null); // the div of autoComplent component

  // Support Keyboard
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const debouncedValue = useDoubance(inputValue, 500);
  useClickOutside(componentRef, () => {
    // close suggeston drop down
    setSuggestions([]);
  });

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(inputValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setSuggestions(data);
          setLoading(false);
          if (data.length > 0) {
            setShowDropdown(true)
          }
        });
      } else {
        setSuggestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    // clear highlight after fetch
    setHighlightIndex(-1);
  }, [debouncedValue]);

  const highligh = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) index = suggestions.length - 1;
    setHighlightIndex(index);
  };
  //
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    // console.log('Key  code', e.key, e.code);
    switch (e.key) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          // suggesions is [] when fetch is running
          handleSelect(suggestions[highlightIndex]);
        }
        break;

      case 'Escape':
        setShowDropdown(false)
        break;

      case 'ArrowDown':
        highligh(highlightIndex + 1);
        break;

      case 'ArrowUp':
        highligh(highlightIndex - 1);
        break;

      default:
        break;
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropDown = () => {
    return (
      <Transition in ={showDropdown || loading} animation="zoom-in-top"
      timeout={300} onExited={()=>{setSuggestions([])}}>
        <ul className="viking-suggestion-list">
          {
            loading && <div className="suggeston-loading-icon">
              <Icon icon="spinner" spin></Icon>
            </div>
          }
          {suggestions.map((item, index) => {
            const cnames = classNames("suggestion-item",{
              'is-active': index === highlightIndex,
            });
            return (
              <li
                key={index}
                className={cnames}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };
  return (
    <div className="viking-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
        onKeyDown={handleKeyDown}
      />
      {generateDropDown()}
    </div>
  );
};

export default AutoComplete;
