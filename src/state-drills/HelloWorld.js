import React from 'react';
import { thisTypeAnnotation } from '@babel/types';

class HelloWorld extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            who:'World',
        }
    }

    render() {
        console.log(this.state)
        return <div className ='HelloWorld'>
            <p>Hello, {this.state.who} </p>
            <button onClick = {() => this.setState({who: 'World'})} > World </button> <br></br>
            <button onClick = {() => this.setState({who: 'Friend'})} > Friend </button> <br></br>
            <button onClick = {() => this.setState({who: 'React'})} > React </button> <br></br>
        </div>
    }
}

export default HelloWorld