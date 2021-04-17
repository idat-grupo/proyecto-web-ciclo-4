import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
//import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Error path="*">
          <Home/>
        </Error>
      </Switch>
    </Router>
  );
}

export default App;
