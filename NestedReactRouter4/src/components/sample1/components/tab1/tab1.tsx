import * as React from "react";

interface Tab1Properties {
    inputValue: string;
}

export class Tab1 extends React.Component<Tab1Properties, undefined> {

    public render(): JSX.Element {
        return (
            <div style={{ backgroundColor: "rgb(255, 0, 0)", marginTop: "10px", textAlign: "center", marginLeft: "5px", height: "150px", width: "200px", color: "black" }}>
                Tab 1 - {this.props.inputValue}
            </div>
        )
    }
}