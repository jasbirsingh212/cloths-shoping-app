import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';

//Pages
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shop/shop';
import Authorization from './pages/Authorization/authorization';

// components
import Header from './components/header/header';
import { auth, customzedProfileData } from './components/firbase/firebase-auth';

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser :  null
    }
  }

  unsubscribe = null;

  componentDidMount  () {
    this.unsubscribe = auth.onAuthStateChanged(async(user) => {
      if(user){

        const { userSnap} = await customzedProfileData(user);
        this.setState({
          currentUser:{
            id: userSnap.id,
            ...userSnap.data()
          }
        })
       
      }
      else this.setState({currentUser : user})

    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() { 
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header user={currentUser} />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={Authorization} />
        </Switch>
      </div>
    );
  }
}


export default App;
