import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Tab1 } from "./components/tab1/tab1";
import { Tab2 } from "./components/tab2/tab2";
import { Link } from "react-router-dom";

export class Sample1 extends React.Component<{}, undefined> {

    public render(): JSX.Element {

        const linkStyle = { backgroundColor: "rgb(215, 215, 215)", marginLeft: "5px", height: "25px", width: "60px", color: "black", padding: "10px", cursor: "pointer" };

        const MyTab1 = (): JSX.Element => {
            return (<Tab1 inputValue="Property for tab 1"></Tab1>)
        }

        return (
            <div>
                <h1>Sample page 1</h1>
                <div style={{ display: "flex" }}>
                    <Link style={linkStyle} to="/home/sample1/tab1">Tab 1</Link>
                    <Link style={linkStyle} to="/home/sample1/tab2">Tab 2</Link>
                </div>
                <Switch>
                    <Route path="/home/sample1/tab1" component={MyTab1}></Route>
                    <Route path="/home/sample1/tab2" component={Tab2}></Route>
                    <Route>
                        <Redirect to="/home/sample1/tab1"></Redirect>
                    </Route>
                </Switch>
            </div>
        )
    }
}