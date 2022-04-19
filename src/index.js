import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude});
            },
            err => console.log(err.message)
        );
    }

    render(){
        return <div> Hello there! lat: { this.state.lat}m</div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));