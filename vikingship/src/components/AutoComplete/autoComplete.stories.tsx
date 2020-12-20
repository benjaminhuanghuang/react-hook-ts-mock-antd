import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoComplete, { DataSourceType } from './autoComplete';

interface PlayerProps {
  value: string;
}


interface GithubUserProps {
  login: string,
  url: string,
  avatar_url: string,
}

const SimpleComplete = () => {
  //const names = ['aaa', 'bbbbb', 'cccc', 'aaaddbb', 'bbbcccc'];
  // const handleFetch = (query: string) => {
  //   return names
  //     .filter((name) => name.includes(query))
  //     .map((name) => ({ value: name }));
  // };
  // const players = [
  //   { value: 'aaa', number: 12 },
  //   { value: 'bbbbb', number: 12 },
  //   { value: 'cccc', number: 12 },
  //   { value: 'aaaddbb', number: 12 },
  //   { value: 'bbbcccc', number: 12 },
  // ];

  // const handleFetch = (query: string) => {
  //   return players
  //     .filter((player) => player.value.includes(query))
  // };

  const handleFetch = (query: string) => {
    // return a promise
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({
          value: item.login,
          ...item,
        }));
      });
  };
  // const renderOption = (item: DataSourceType<GithubUserProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item.login}</h2>
  //       <h2>url: {item.url}</h2>
  //     </>
  //   );
  // };

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      // renderOption={renderOption}
    />
  );
};

storiesOf('AutoComplete component', module).add(
  'AutoComplete Simple',
  SimpleComplete
);
