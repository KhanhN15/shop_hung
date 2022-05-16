import React from "react";

import { Route, Switch } from "react-router-dom";
import ListTour from "../pages/ListTour";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Air from "../pages/Air";
import DetailAir from "../pages/DetailAir";
import Eats from "../pages/Eats";
import EatsDetail from "../pages/EatsDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/detail/:id" component={Detail} />
      <Route path="/list-tour" component={ListTour} /> */}
      <Route path="/eats" component={Eats} />
      <Route path="/eat/detail/:id" component={EatsDetail} />
      <Route path="/air" component={Air} />
      <Route path="/detail-air" component={DetailAir} />
    </Switch>
  );
};

export default Routes;
