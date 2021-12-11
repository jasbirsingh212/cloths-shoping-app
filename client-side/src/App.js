import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
//import { collectionItem } from './utils/constant';


// components
import Header from "./components/header/header";
import {
  auth,
  customzedProfileData,
  /*addCollectionsAndDocuments */ /*getDataFromCollection,*/
} from "./components/firbase/firebase-auth";

//action
import { add_User } from "./redux/user/user-acttion";
import { /*addCollection*/ addCollectionAsync } from "./redux/collections/collection-action";
import Loader from "./components/loader/loader";
import withSpinner from "./components/with-spinner-HOC/with-spinner-HOC";

//Pages
const HomePage = lazy(() => import("./pages/homePage/homePage"));
const ShopPage = lazy(() => import('./pages/shop/shop'))
const Authorization = lazy(() => import("./pages/Authorization/authorization"))
const CartDetail = lazy(() => import('./pages/cart-detail/cart-detail'))
const CollectionPage = lazy(() => import("./pages/collection/collections-page"))
const HomePageWithSpinner = withSpinner(HomePage);
const ShopPageWithSpinner = withSpinner(ShopPage);
const AuthorizationWithSpinner = withSpinner(Authorization);
const CartDetailWithSpinner = withSpinner(CartDetail)
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class App extends Component {
  unsubscribe = null;

  componentDidMount = async () => {
    const { addUser, /*addToCollection*/addToCollectionAsync  } = this.props;
    //addCollectionsAndDocuments('collections', collectionItem);
    // const collection = await getDataFromCollection("collections");
    // addToCollection(collection);
    try {
      await addToCollectionAsync()
      
    } catch (error) {
      console.log(error)
    }
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { userSnap } = await customzedProfileData(user);
        addUser({
          id: userSnap.id,
          ...userSnap.data(),
        });
      } else {
        addUser(user);
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
        <Suspense fallback={<Loader />}>
          <Route
            path="/sign-in"
            render={() =>
              currentUser && currentUser.id ? (
                <Redirect to="/" />
              ) : (
                <AuthorizationWithSpinner />
              )
            }
          />
          <Route exact path="/" component={HomePageWithSpinner} />
          <Route exact path="/shop" component={ShopPageWithSpinner} />
          <Route exact path="/cart" component={CartDetailWithSpinner} />
          <Route exact path="/contact" component={Loader} />
          <Route exact path="/shop/:category" component={CollectionPageWithSpinner} />
        </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (currentUser) => {
      dispatch(add_User(currentUser));
    },
    // addToCollection: (collection) => {
    //   dispatch(addCollection(collection));
    // },
    addToCollectionAsync:() =>  dispatch(addCollectionAsync()),
  };
};

const mapStateToProps = ({ user: { currentUser } }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
