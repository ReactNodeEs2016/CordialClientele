//Creating a sample react class
import React from 'react'
import ReactDOM from 'react-dom'

const SampleNode = React.createClass({
    render(){
        return (
            <div>
            <h1>Welcome to Cordial Clientele Application </h1>
            </div>
        );
    }
});

ReactDOM.render(<SampleNode/>,document.getElementById('Sample-Node'));