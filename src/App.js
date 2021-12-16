import React from 'react';
import Home from './components/pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Event from './components/pages/Events/Event/Event';
import AddTeacher from './components/Dashboard/AddTeacher/AddTeacher';
import Teachers from './components/pages/Teachers/Teachers/Teachers';
import AddEvents from './components/Dashboard/AddEvents/AddEvents';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route  exact path='/' component={Home}></Route>
        <Route  path='/home' component={Home}></Route>
        <Route  path='/events' component={Event}></Route>
        <Route  path='/add_teacher'component={AddTeacher}></Route>
        <Route  path='/teachers' component={Teachers}></Route>
        <Route  path='/add_events' component={AddEvents}></Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;