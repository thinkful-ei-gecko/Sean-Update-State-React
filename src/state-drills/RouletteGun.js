import React from 'react';

class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber:8
    };


    constructor(bulletInChamber) {

        super(bulletInChamber)
        this.state={
            chamber:null,
            spinningTheChamber:false
        };
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount =()=> {
        this.setState({spinningTheChamber: true})
            let generate =() => {
                let randNum = Math.ceil(Math.random()*8)
                this.setState({chamber:randNum})
                this.setState({spinningTheChamber:false})
           }

           let timeout = setTimeout (generate, 2000)
           //this.componentWillUnmount();

    }
    

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
   
   
    render() {
    let display;
    if(this.state.spinningTheChamber === true){
        display = 'spinning the chamber and pulling the trigger!...'
    }
    else if(this.state.chamber === this.props.bulletInChamber){
        display= 'BANG!!!!!'
    }
    else display = `You're safe`;

    return <div className = "RouletteGun">
                <p>{display}</p>
            <button type = "button" onClick={this.componentDidMount}>Pull The Trigger!</button>
          </div>
    }

}

export default RouletteGun