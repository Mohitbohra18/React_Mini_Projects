import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 });
    }

    dec = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.inc}>Icerase</button>
                <button onClick={this.dec}>Decrease</button>
            </div>

        );
    }

};
export default myComponents;