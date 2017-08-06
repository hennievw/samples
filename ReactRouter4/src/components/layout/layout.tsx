import * as React from "react";

export class Layout extends React.Component<{}, undefined> {

    private onContactsClickHandler(): void {
        window.location.hash = "/home/contacts";
    }

    private onProductsClickHandler(): void {
        window.location.hash = "/home/products";
    }

    public render(): JSX.Element {

        return (
            <div>
                <div style={{ backgroundColor: 'rgb(24, 103, 126)', height: '60px', color: 'white', padding: '10px' }}>
                    <div>The home page
                        <div style={{paddingTop: '20px'}}>
                            <button onClick={this.onContactsClickHandler}>Contacts</button>
                            <button onClick={this.onProductsClickHandler}>Products</button>
                        </div>
                    </div>                 
                </div>
                {this.props.children}
            </div>
        )
    }
}