import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoComplete from './autoComplete';

const SimpleComplete = () => {
  const options =["aaa", 'bbbbb','cccc', 'aaaddbb', 'bbbcccc'];

  const handleFetch = (query:string) =>{
    return options.filter(name=>name.includes(query))
  }

  return (
    <AutoComplete fetchSuggestions={handleFetch}/>
  )
};

storiesOf('AutoComplete component', module)
  .add('AutoComplete Simple', SimpleComplete);
