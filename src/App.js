import React, { useEffect } from "react";
import Registrar from "./pages/Registrar";
import { Switch, Route } from "react-router-dom";
import IniciarSesion from "./pages/IniciarSesion";
import Principal from "./pages/Principal";
import { useDispatch } from "react-redux";
import Historia from "./pages/Historia";
import Ordenar from "./pages/Ordenar";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Switch>
        <Route exact path="/" component={Historia}/>
        <Route path="/ordenar" component={Ordenar}/>
        {/*<Route exact path="/" component={IniciarSesion}
        <Route path="/registrar" component={Registrar} />
  <Route  path="/principal" render={() => <Principal />} />*/}
      </Switch>
    </>
  );
}

export default App;
