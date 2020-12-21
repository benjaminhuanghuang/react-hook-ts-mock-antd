import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './tabs';
import TabItem from './tabItem';

export const defaultTabs = () => (
  <Tabs>
    <TabItem label="Tab 1" disabled>
      <h2>Tab 1 Content</h2>
    </TabItem>
    <TabItem label="Tab 2">
      <h2>Tab 2 Content</h2>
    </TabItem>
    <TabItem label="Tab 3">
      <h2>Tab 3 Content</h2>
    </TabItem>
  </Tabs>
);

storiesOf('Tabs Component', module).add('Tabs', defaultTabs);
