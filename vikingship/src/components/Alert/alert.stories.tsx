import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Alert, { AlertType } from './alert';

const defaultAlert = () => (
  <Alert
    onClose={action('close')}
    title="Alert Title"
    description="Alert Description"
    type="success"
    closable
  >
  </Alert>
);


storiesOf('Alert Component', module)
  .add('Alert', defaultAlert)

