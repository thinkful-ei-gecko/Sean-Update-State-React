import React from 'react';

class TheDate extends React.Component {

  constructor(prop) {
    super(prop)
    this.state={
        datetime: new Date() 
    };
  }


  render() {
    console.log(this.state)
    return <div>{this.state.datetime.toLocaleString}</div>
  }
}

export default TheDate