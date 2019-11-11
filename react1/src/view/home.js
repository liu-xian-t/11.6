import React, { Component } from 'react';
import {BrowserRouter,NavLink,Switch,Redirect,Route} from "react-router-dom"
import Page from './home/page';
import Hot from './home/hot';
import Shop from './home/shop';
import Mine from './home/mine';
export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="head">
                   <h2>威网</h2>
                </div>
                <div className="main">
                   <Route path="/home/page" component={Page}></Route>
                   <Route path="/home/hot" component={Hot}></Route>
                   <Route path="/home/shop" component={Shop}></Route>
                   <Route path="/home/mine" component={Mine}></Route>
                </div>
                <div className="footer">
                  <NavLink className="sp" to="/home/page">首页</NavLink>
                  <NavLink className="sp" to="/home/hot">狂热</NavLink>
                  <NavLink className="sp" to="/home/shop">购物车</NavLink>
                  <NavLink className="sp" to="/home/mine">我的</NavLink>
                </div>
            </div>
        );
    }
}

export default Home;
