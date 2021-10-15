import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shop/shop';

// components
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
