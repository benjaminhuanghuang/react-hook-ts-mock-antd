import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './select';
import Option from './option';

export const defaultSelect = () => (
  <Select>
   <Option index="1" value="v1" label="Option 1" disabled/>
   <Option index="2" value="v2" label="Option 2"/>
   <Option index="3" value="v3" label="Option 3"/>
   <Option index="4" value="v4" label="Option 4"/>
  </Select>
);

storiesOf('Select Component', module).add('Select', defaultSelect);
