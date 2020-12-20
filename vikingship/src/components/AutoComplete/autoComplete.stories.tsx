import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoComplete from './autoComplete';

const defaultAutoComplete = () => <AutoComplete />;

storiesOf('AutoComplete component', module).add('AutoComplete Default UI', defaultAutoComplete);
