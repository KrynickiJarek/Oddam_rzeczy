import React from 'react';
import {BrowserRouter} from "react-router-dom"; /// as Router
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
      <BrowserRouter>
        <Route exact path={"/"} component={Home}/>
      </BrowserRouter>

  );
};

export default App;