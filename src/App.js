import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from "./components/Inventory/Inventory";
import NotFound from './components/NotFound/NotFound';
import Order from "./components/Order/Order";
import Review from "./components/Review/Review";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
          <Header></Header>
        <Switch>
            <Route exact path ="/">
              <Shop></Shop>
            </Route>
            <Route exact path ="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path ="/orders">
              <Order></Order>
            </Route>
            <Route exact path ="/review">
              <Review></Review>
            </Route>
            <Route exact path ="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

// <Switch>
//               <Route exact path='/' component={Home} />
//               <Route path='/contact' component={Contact} />
//               <Route path='/about' component={About} />
//  </Switch>


// shortcut routing
// https://ui.dev/react-router-v5-route-config/
