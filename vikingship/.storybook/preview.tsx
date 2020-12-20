
import React from 'react';
import {addParameters, addDecorator, configure} from '@storybook/react';
import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const wrapperStyle : React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (storyFn: any) =>(
  <div style={wrapperStyle}>
    <h3>Decorator</h3>
    {storyFn()}
  </div>
)

addDecorator(storyWrapper)
addParameters({
  info:{
    inline: true,
    header: false
  }
})