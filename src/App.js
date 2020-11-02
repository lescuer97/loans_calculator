import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
function App() {
  // TODO AGREGAR VARIACIONES DEL CALCULO
  return (
    <div className='App'>
      <Header>
        <Home />
      </Header>
    </div>
  );
}

export default App;
