import './App.css';
import './sidebar-alerts.css';

import CollapseMenu from './components/CollapseMenu';
function App() {

  return (
    <div className="App">
      <script src="./components/LocalFileRead.js"></script>
      <div className="Menu">
        <CollapseMenu />
      </div>
    </div>
  );
}


export default App;
