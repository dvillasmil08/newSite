import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";

import Index from "views/Index.js";
import Allowlist from "views/forms/Allowlist";
import Bugreport from "views/forms/Bugreport";
import Reportplayer from "views/forms/Reportplayer";
import Banappeal from "views/forms/Banappeal";
import Staff from "views/forms/Staff";
import Devapp from "views/forms/Devapp";
import Lawapp from "views/forms/Lawapp";
import Branding from "views/forms/Branding";
import Rules from "views/forms/Rules";
import Privacy from "views/forms/Privacy";


ReactDOM.render(
  // <BrowserRouter>
    
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
        
            <Route exact path="/allowlist" component={Allowlist} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/developer" component={Devapp} />
            <Route exact path="/law" component={Lawapp} />
            
            <Route exact path="/bug" component={Bugreport} />
            <Route exact path="/report" component={Reportplayer} />
            <Route exact path="/appeal" component={Banappeal} />
            

            <Route exact path="/branding" component={Branding} />
            
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/privacy" component={Privacy} />    
        </Switch>
    </Router>
   
  // </BrowserRouter>,
  ,document.getElementById("root")
);
