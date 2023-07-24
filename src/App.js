import './App.css';
import './sidebar-alerts.css';
import React from 'react';

import CollapseMenu from './components/CollapseMenu';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <CollapseMenu />
      </div>
    </div>
  );
}



export default App;
