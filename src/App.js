import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState} from 'react'

import Index from './Views/Index';

import Navbar from './Layout/Navbar/Navbar'

import produits from './Data/produits'

import './Assets/scss/index.scss'

function App() {
  const [panier, setPanier] = useState([])


  return (
    <Router className="App">

      <Navbar panier = {panier} />

      <Switch>
        <Route path="/">
          <Index produits={produits} setPanier = {setPanier} panier={panier} />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
