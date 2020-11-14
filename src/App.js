import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";

import ResultState from './context/result/ResultState';
function App() {
  // TODO AGREGAR VARIACIONES DEL CALCULO
  return (
    <ResultState>
    <div className='App'> 
    
    
    <Router>
        <Header>
            <Switch>
              <Route
                className="w-full px-8 pt-4 "
                exact
                path="/"
                component={Home}
              />
              <Route   className="w-full px-8 pt-4 "
                exact
                path="/result"
                component={Result}
         />
            </Switch>
    
           </Header>
          </Router>
    </div>
    </ResultState>
  );
}

export default App;
