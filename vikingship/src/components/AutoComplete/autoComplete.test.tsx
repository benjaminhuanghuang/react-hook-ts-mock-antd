import React from 'react';
import {config} from 'react-transition-group';
import { render, fireEvent, RenderResult, waitFor } from '@testing-library/react';

import AutoComplete, {AutoCompleteProps} from './autoComplete';

// disable transition for testing
config.disabled = true;

const testArray =  [
  {value: 'ab', number:11},
  {value: 'abc', number:1},
  {value: 'b', number:4},
  {value: 'c', number:15},
]


const testProps: AutoCompleteProps = {
  fetchSuggestions : (query:string) => {return testArray.filter(item=> item.value.includes(query))},
  onSelect : jest.fn(),
  placeholder: 'auto-complete'
};

let wrapper : RenderResult, inputNode: HTMLInputElement;

describe('test AutoComplete component', () => {
  beforeEach(()=>{
    wrapper = render(<AutoComplete {...testProps}/>)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement;

  })

  it('should basic AutoComplete', async () => {
    // input change
    fireEvent.change(inputNode,  {target: {value: 'a'}});
    // 
    await waitFor(() =>{
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
    })
    
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2);
    // click the first
    fireEvent.click(wrapper.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({value:'ab', number:11});
    expect(wrapper.getByText('ab')).not.toBeInTheDocument();
    // Fill input
    expect(inputNode.value).toBe('ab');
  });

  it('should provide keyboard support', async () => {
    // input change
    fireEvent.change(inputNode,  {target: {value: 'a'}});
    // 
    await waitFor(() =>{
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
    })
    
    const firstResult = wrapper.queryByText('ab');
    const secondResult = wrapper.queryByText('abc');

    // arrow down
    fireEvent.keyDown(inputNode, {key:'ArrowDown'});
    expect(firstResult).toHaveClass('is-active')
    fireEvent.keyDown(inputNode, {key:'ArrowDown'});
    expect(secondResult).toHaveClass('is-active')
    
    fireEvent.keyDown(inputNode, {key:'ArrowUp'});
    expect(firstResult).toHaveClass('is-active')
    
    // enter
    fireEvent.keyDown(inputNode, {key:'Enter'});
    expect(testProps.onSelect).toHaveBeenCalledWith({value:'ab', number:11});
    expect(wrapper.getByText('ab')).not.toBeInTheDocument();
    // Fill input
    expect(inputNode.value).toBe('ab');
  });


  it('click outside should hide the dropdown', async () => {
    // input change
    fireEvent.change(inputNode,  {target: {value: 'a'}});
    // 
    await waitFor(() =>{
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
    })
    
    fireEvent.click(document )
    expect(wrapper.getByText('ab')).not.toBeInTheDocument();
  });

  it('renderOption should generate the right template', () => {
    
    
  });

  it('aync fetch suggestons shoule work fine', () => {
    
    
    
  });
});
