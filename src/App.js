import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from "./components/Inventory/Inventory";
import NotFound from './components/NotFound/NotFound';
import Order from "./components/Order/Order";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Review from "./components/Review/Review";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
          <Header></Header>
        <Switch>
            <Route exact path='/' component={Shop} />
             
            <Route exact path ="/shop" component={Shop}/>
             
            <Route exact path ="/orders" component={Order}/>
              
            <Route exact path ="/review" component={Review}/>
              
            <Route exact path ="/inventory" component={Inventory}/>

            <Route exact path ="/placeOrder" component={PlaceOrder}/>
             
            <Route path="*" component={NotFound}/>
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
