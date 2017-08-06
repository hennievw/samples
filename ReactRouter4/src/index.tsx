import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { Layout } from "./components/layout/layout";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <HashRouter>
        <Switch>           
            <Route path="/home">
                <Layout>
                    <Switch>
                        <Route path="/home/contacts">
                            <div>Contacts page</div>
                        </Route>
                        <Route path="/home/products">
                            <div>Products catalog</div>
                        </Route>
                        <Route>
                            <div>Default landing page for home</div>
                        </Route>
                    </Switch>
                </Layout>
            </Route>
            <Route path="/about" >
                <div>About this app</div>
            </Route>      
            <Route>
                <Redirect to="/home"></Redirect>
            </Route>      
        </Switch>
    </HashRouter>
    , rootElement);

