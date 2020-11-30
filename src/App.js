import React from 'react';
import {Switch, Route} from "react-router-dom"; /// as Router
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  return (
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/logowanie"} component={Login}/>
        <Route exact path={"/rejestracja"} component={Register}/>
      </Switch>

  );
};

export default App;