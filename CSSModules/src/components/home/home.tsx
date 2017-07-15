import * as React from "react";
import * as Styles from "./home.css";

export class Home extends React.Component<{}, undefined> {

    public render(): JSX.Element {
        return (
            <div className={Styles.container}>
                <span className={Styles.textLabel}>Basic CSS Modules</span>
            </div>
        )
    }
}