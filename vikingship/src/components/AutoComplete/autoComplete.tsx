import React, { useEffect,ReactElement, ChangeEvent, FC, useState } from 'react';
//
import Input, { InputProps } from '../Input/input';
import Icon from '../Icon/icon';
import useDoubance from '../../hooks/useDebounce'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T={}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props;
 
  const [inputValue, setInputValue] = useState<string>(value as string);
  const [suggestions, setSuiggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedValue = useDoubance(inputValue, 500);
  useEffect(()=>{
    if (debouncedValue) {
      const result = fetchSuggestions(inputValue);
      if(result instanceof Promise){
        setLoading(true);
        result.then((data)=>{
          setSuiggestions(data);
          setLoading(false);
        })
      }
      else{
        setSuiggestions(result);
      }
    } else {
      setSuiggestions([]);
    }

  },[debouncedValue])

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

  const renderTemplate = (item : DataSourceType) =>{
    return renderOption? renderOption(item) : item.value
  }

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="viking-auto-complete">
      <Input value={value} onChange={handleChange} {...restProps} />
      {loading && <ul><Icon icon="spinner" spin/></ul>}
      {suggestions.length > 0 && generateDropDown()}
    </div>
  );
};

export default AutoComplete;
