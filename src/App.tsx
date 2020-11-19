import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CarsPage from './pages/CarsPage';
import CarDetail from './pages/CarDetail';
import FourZeroFour from './pages/FourZeroFour';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CarsPage />
          </Route>
          <Route exact path="/detail/:stockNumber">
              <CarDetail/>
          </Route>
          <Route>
              <FourZeroFour/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
