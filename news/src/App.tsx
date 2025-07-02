import React from 'react';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {Outlet} from "react-router";


function App() {
  return (
      <div className="App">
            <Header/>
            <Menu/>
            <Outlet/>
      </div>

  );
}

export default App;
