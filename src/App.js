import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from 'react';


//user login related CONTEXT>
export const UserContext = createContext();
//user login related CONTEXT<

function App() {

  //user login related useState>
  const [userStatus, setUserStatus] = useState({
    isLoggedIn: false,
    displayName: '',
    email: '', 
    profilePicUrl: ''
  }
  );
  //user login related useState<

  return (
    <UserContext.Provider value={[userStatus, setUserStatus]}>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/orders">
              <Orders />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
