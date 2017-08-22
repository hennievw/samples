import * as React from "react";
import { Switch, Route } from "react-router";
import { Sample1 } from "../sample1/sample1";
import { Sample2 } from "../sample2/sample2";
import { Link } from "react-router-dom";

export class MainLayout extends React.Component<{}, undefined> {

    public render(): JSX.Element {

        const linkStyle = { color: "rgb(255, 255, 255)", paddingRight: "10px" };

        return (
            <div>
                <div style={{ backgroundColor: 'rgb(24, 103, 126)', height: '60px', color: 'white', padding: '10px' }}>
                    <div>React Router 4 demo
                        <div style={{ paddingTop: '20px' }}>
                            <Link style={linkStyle} to="/home/sample1">Sample 1</Link>
                            <Link style={linkStyle} to="/home/sample2">Sample 2</Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/home/sample1" component={Sample1}></Route>
                    <Route path="/home/sample2" component={Sample2}></Route>
                    <Route>
                        <div>Default landing page for home</div>
                    </Route>
                </Switch>
            </div>
        )
    }
}