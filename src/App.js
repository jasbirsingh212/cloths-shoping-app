import './App.css';
import 'antd/dist/antd.css';
import HomePage from './pages/homePage/homePage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
