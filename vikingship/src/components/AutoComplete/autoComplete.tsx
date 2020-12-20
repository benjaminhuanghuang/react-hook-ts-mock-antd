import React, {ChangeEvent, FC, useState} from 'react'
//
import Input, {InputProps} from '../Input/input';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect?:(item: string)=> void;
  value?:string
}


const AutoComplete: FC<AutoCompleteProps> = (props) =>{
  const {
    fetchSuggestions,
    onSelect,
    value,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuiggestions] = useState<string[]>([]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim();
    setInputValue(value);

    if(value){
      const result = fetchSuggestions(value);
      setSuiggestions(result);
    }
    else
    {
      setSuiggestions([]);
    }
  }
  
  const generateDropDown = () =>{
    return (
      <ul>
        {suggestions.map((item, index)=>{
          return (
              <li key={index}>{item}</li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="viking-auto-complete">
      <Input 
        value={value}
        onChange={handleChange}
        {...restProps}
      />
      {(suggestions.length > 0 && generateDropDown())}
    </div>
  )
} 

export default AutoComplete;