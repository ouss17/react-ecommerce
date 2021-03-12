import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './Views/Index';

import Navbar from './Layout/Navbar/Navbar'

import produits from './Data/produits'

import './Assets/scss/index.scss'

function App() {
  return (
    <Router className="App">

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
