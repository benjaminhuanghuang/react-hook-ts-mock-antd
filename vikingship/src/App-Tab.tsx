import React from 'react';
//
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';

function App() {
  return (
    <div className="App">
      <Tabs defaultIndex={0} onSelect={() => {}}>
        <TabItem label="Tab1">this is tab i</TabItem>
        <TabItem label="Tab2">this is tab i</TabItem>
        <TabItem label="Tab3" disabled>
          this is disabled tab
        </TabItem>
      </Tabs>
    </div>
  );
}

export default App;
