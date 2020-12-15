import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";
import Project from "./components/pages/Project";

import ResultState from './context/result/ResultState';

function App() {
  // TODO AGREGAR COMPONENTE DE ADDS
  // PARA TRATAR SUPLEMENTAR LAS ADDS SE PUEDE USAR coinimp

  // TODO TRATAR DE DISEÑAR MEJOR FUCKKK

  
  return (
    <>
    <ResultState>
    <div className='flex flex-col h-screen md:justify-between'>  
    <Router>
       <Header/>
            <Switch>
              <Route
                className="w-full px-8 pt-4 "
                exact
                path="/"
                component={Home}
              />
              <Route className="w-full px-8 pt-4"
                exact
                path="/result"
                component={Result}
         />
                <Route className="w-full px-8 pt-4"
                exact
                path="/project"
                component={Project}
         />
            </Switch>  
            <Footer/>
            </Router>

        
    </div>
    </ResultState>
    </>
  );
}

export default App;
