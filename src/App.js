import React from 'react';
import Home from './components/pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Event from './components/pages/Events/Event/Event';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route  exact path='/' component={Home}></Route>
        <Route  exact path='/home' component={Home}></Route>
        <Route  exact path='/events' component={Event}></Route>

        </Switch>
      </Router>
      
    </div>
  );
};

export default App;