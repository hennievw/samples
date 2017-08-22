import * as React from "react";
import { Switch, Route } from "react-router";
import { Sample1 } from "../sample1/sample1";
import { Sample2 } from "../sample2/sample2";

export class MainLayout extends React.Component<{}, undefined> {

    private onContactsClickHandler(): void {
        window.location.hash = "/home/sample1";
    }

    private onProductsClickHandler(): void {
        window.location.hash = "/home/sample2";
    }

    public render(): JSX.Element {

        return (
            <div>
                <div style={{ backgroundColor: 'rgb(24, 103, 126)', height: '60px', color: 'white', padding: '10px' }}>
                    <div>React Router 4 demo
                        <div style={{ paddingTop: '20px' }}>
                            <button onClick={this.onContactsClickHandler}>Example 1</button>
                            <button onClick={this.onProductsClickHandler}>Example 2</button>
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