import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';

//Pages
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shop/shop';
import Authorization from './pages/Authorization/authorization';
import CartDetail from './pages/cart-detail/cart-detail';

// components
import Header from './components/header/header';
import { auth, customzedProfileData } from './components/firbase/firebase-auth';

//action
import { add_User } from './redux/user/user-acttion';
import CollectionPage from './pages/collection/collections-page';

class App extends Component {


  unsubscribe = null;

  componentDidMount  () {
    const {addUser} = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async(user) => {
      if(user){

        const { userSnap} = await customzedProfileData(user);
        addUser({
            id: userSnap.id,
            ...userSnap.data()
          }
        )
       
      }
      else {
        addUser(user)
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() { 
    const {currentUser} = this.props;
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in'  render={() => currentUser && currentUser.id ? (<Redirect to='/' />) : (<Authorization /> )} />
          <Route exact path='/cart' component={CartDetail} />
          <Route exact path='/shop/:category' component={CollectionPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    addUser: (currentUser) => {
      dispatch(add_User(currentUser))
    }
  }


}

const mapStateToProps = ({user: {currentUser}}) => {

    return {
      currentUser
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

