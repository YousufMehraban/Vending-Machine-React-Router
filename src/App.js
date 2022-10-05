import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import VendingMachine from './pages/VendingMachine';
import Drink from './pages/Drink';
import Eat from './pages/Eat';
import Sardine from './pages/Sardine';



function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
          <nav className='NavLinks'>
            <NavLink exact to="/">Vending Machine</NavLink>
            <NavLink exact to="/drink">Drink</NavLink>
            <NavLink exact to="/eat">Eat</NavLink>
            <NavLink exact to="/sardine">Sardine</NavLink>
          </nav>
          <Switch>
            <Route exact path="/drink"> <Drink/> </Route>
            <Route exact path="/eat"> <Eat/> </Route>
            <Route exact path="/sardine"> <Sardine/> </Route>
            <Route exact path="/"> <VendingMachine/> </Route>
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
