import React, { Component } from 'react';
import {BrowserRouter,Switch,Redirect,Route} from "react-router-dom"
import Home from '../view/home';
export class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                  <Switch>
                      <Route path="/home" component={Home}></Route>
                      <Redirect from="/" to="/home"></Redirect>
                  </Switch>
                </BrowserRouter>
        );
    }
}

export default Router;
