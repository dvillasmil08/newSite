/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import Allowlist from "views/forms/Allowlist";



ReactDOM.render(
  // <BrowserRouter>
    
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
        
            <Route exact path="/allowlist" component={Allowlist} />

            {/* <Route exact path="/privacy" component={Privacy} />

            <Route exact path="/rules" component={Rules} />
            
            <Route exact path="/report" component={Reportplayer} />

            <Route exact path="/bugs" component={Bugreport} />
           
            <Route exact path="/appeal" component={Banappeal} />
            
            <Route exact path="/staff" component={Staffapp} />
            
            <Route exact path="/developer" component={Devapp} />
            
            <Route exact path="/law" component={Lawapp} />
           
            <Route exact path="/streamers" component={Streamapp} />
            
            <Route exact path="/branding" component={Branding} />

            <Route exact path="/donate" component={Donate} /> */}
    
        </Switch>
    </Router>
   
  // </BrowserRouter>,
  ,document.getElementById("root")
);
