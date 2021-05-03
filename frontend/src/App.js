import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header'
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Carrito from './pages/CarritoCompras';
//import Carousel from './components/Carousel/Carousel';
import Footer from "./components/Footer";
import CatalogoProductos from "./pages/CatalogoProductos";
import ProductoDetalle from "./pages/ProductoDetalle";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/catalogo_prod">
          <CatalogoProductos />
        </Route>
        <Route path="/prod">
          <ProductoDetalle />
        </Route>
        <Route path="/carrito">
          <Carrito/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
