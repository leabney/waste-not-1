import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Wrapper, WrapperImage } from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FoodWaste from './pages/Educate/FoodWaste';
import Hunger from './pages/Educate/Hunger';
import Inventory from './pages/AtHome/Inventory';
import Recipes from './pages/AtHome/Recipes';
import FoodSupplier from './pages/GetInvolved/FoodSupplier';
import Individual from './pages/GetInvolved/Individual';
import Resources from './pages/GetInvolved/Resources';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';


const App = () => (
  <Router>
    <Wrapper>
      <Navbar />
        <Jumbotron />
        <div class='siteContent'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/Educate/FoodWaste' component={FoodWaste} />
          <Route exact path='/Educate/Hunger' component={Hunger} />
          <Route exact path='/Home/Inventory' component={Inventory} />
          <Route exact path='/Home/Recipes' component={Recipes} />
          <Route exact path='/GetInvolved/FoodSupplier' component={FoodSupplier} />
          <Route exact path='/GetInvolved/Individual' component={Individual} />
          <Route exact path='/GetInvolved/Resources' component={Resources} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      <Footer />
    </Wrapper>
    
  </Router>
)

export default App;

