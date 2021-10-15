import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
