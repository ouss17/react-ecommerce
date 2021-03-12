import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './Assets/scss/index.scss'

import Navbar from './Layout/Navbar/Navbar'

import Index from './Views/Index'

import produits from './Data/produits'

function App() {
  return (
    <Router>

      <Navbar />


      <Switch>
        <Route path="/">
          <Index produits={produits} />
        </Route>
      </Switch>
      

    </Router>
  );
}

export default App;
