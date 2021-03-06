import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";

// components
import Header from "./components/header/header";
import {
  auth,
  customzedProfileData ,
} from "./components/firbase/firebase-auth";

//action
import { add_User } from "./redux/user/user-acttion";
import {
  addCollectionAsync,
} from "./redux/collections/collection-action";
import Loader from "./components/loader/loader";
import withSpinner from "./components/with-spinner-HOC/with-spinner-HOC";
import ProtectedRoute from "./components/protected-route.js/protected-route";

//Page
const HomePage = lazy(() => import("./pages/homePage/homePage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const Authorization = lazy(() => import("./pages/Authorization/authorization"));
const CartDetail = lazy(() => import("./pages/cart-detail/cart-detail"));
const CollectionPage = lazy(() =>
  import("./pages/collection/collections-page")
);
const ContactPage = lazy(() => import("./pages/contact/contact"));

const HomePageWithSpinner = withSpinner(HomePage);
const ShopPageWithSpinner = withSpinner(ShopPage);
const AuthorizationWithSpinner = withSpinner(Authorization);
const CartDetailWithSpinner = withSpinner(CartDetail);
const CollectionPageWithSpinner = withSpinner(CollectionPage);
const ContactPageWithSpinner = withSpinner(ContactPage);

class App extends Component {
  unsubscribe = null;

  componentDidMount = async () => {
    const { addUser,  addToCollectionAsync } = this.props;
    try {
      await addToCollectionAsync();
    } catch (error) {
      console.log(error);
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
            <ProtectedRoute exact path="/" component={HomePageWithSpinner} />
            <ProtectedRoute exact path="/shop" component={ShopPageWithSpinner} />
            <ProtectedRoute exact path="/cart" component={CartDetailWithSpinner} />
            <Route exact path="/contact" component={ContactPageWithSpinner} />
            <ProtectedRoute
              exact
              path="/shop/:category"
              component={CollectionPageWithSpinner}
            />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser && currentUser.id ? (
                  <Redirect to="/" />
                ) : (
                  <AuthorizationWithSpinner />
                )
              }
            />
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
    addToCollectionAsync: () => dispatch(addCollectionAsync()),
  };
};

const mapStateToProps = ({ user: { currentUser } }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
