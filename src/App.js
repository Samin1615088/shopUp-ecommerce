import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
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
            <Checkout/>
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
  );
}

export default App;
