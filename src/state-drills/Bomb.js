import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            count:0,
            message:''
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        console.log("Component did mount")
        this.interval = setInterval(()=> {
            this.setState({count:this.state.count + 1})
        }, 1000);
    }

    callback = () => {
        if (this.state.count >= 8) {
            clearInterval(this.interval);
            return <div>
                    <p>boom!</p>
                    </div>
        }
        
        else if (this.state.count%2 === 0) {
            return <div>
                    <p>tick</p>
                    </div>
        }

        else 
            return <div>
                    <p>tock</p>
                    </div>
    }


    render() {
        return <div className='Bomb'>
                {this.callback()}
               </div>
    }
}

export default Bomb