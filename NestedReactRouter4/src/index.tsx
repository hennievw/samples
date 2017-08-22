import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { MainLayout } from "./components/mainlayout/mainlayout";
import { About } from "./components/about/about";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" component={MainLayout}></Route>
            <Route path="/about" component={About}></Route>
            <Route>
                <Redirect to="/home"></Redirect>
            </Route>
        </Switch>
    </BrowserRouter>
    , rootElement);

