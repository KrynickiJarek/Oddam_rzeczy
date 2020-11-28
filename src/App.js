import React from 'react';
import {Switch, Route} from "react-router-dom"; /// as Router
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/logowanie"} component={Login}/>
      </Switch>

  );
};

export default App;