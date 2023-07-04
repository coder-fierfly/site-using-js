import './App.css';
import './sidebar-alerts.css';
import json from './jsonConsole.json';
import React, { useState } from 'react';

import CollapseMenu from './components/CollapseMenu';
import Quor from './quor';

function App() {


  return (
    <div className="App">
      <div><Quor /></div>
      <div className="Menu">
        <CollapseMenu />
      </div>
    </div>
  );
}



export default App;
