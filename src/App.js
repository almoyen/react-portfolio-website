import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home'
import Header from './components/Header';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Works from './components/Pages/Works';
import Contact from './components/Pages/Contact'
import './main.css';
import './vendor.css';
import './base.css';
import './fonts.css';

const App = () => {
  return ( 
    
    <Router>
      
      <Header/>
      <main>
      <Switch>
    <Route path = '/' exact>
    <Home/>
    </Route>
    <Route path = '/about' exact>
    <About/>
    </Route>
    <Route path = '/services' exact>
    <Services/>
    </Route>
    <Route path = '/works' exact>
    <Works/>
    </Route>
    <Route path = '/contact' exact>
    <Contact/> 
    </Route>
    </Switch>
    </main>
    </Router>  
);
}
 
export default App;
