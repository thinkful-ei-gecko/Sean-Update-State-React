import React from 'react'

class Accordian extends React.Component{

    static defaultProps={
        text:[],
    };

    state={
        clicked:false,
        index:-1,
    }
    
    clickHandler=(event)=>{
        if(event.target.value){
            this.setState({clicked:!this.state.clicked,
                           index:event.target.value})
        }
    }

    render(){

        return(
            <ul className='Accordian'>
                {this.props.text.map((section, index) => {
                    return(
                    <li key={index}>
                        <button type='button' onClick={(event)=>this.clickHandler} value={index}>Click Me</button>
                        <p index={index}>{this.state.clicked && index == this.state.index ? section.content: null}</p>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default Accordian