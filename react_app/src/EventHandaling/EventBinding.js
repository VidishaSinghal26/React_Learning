// only on class component
// this =  to  work as object in class
//

import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(){
        super();
        // this.changeData=this.changeData.bind(this); // to overide the this  // binding evemt inside the constructor
        this.state={
            name :"hello"
        }
    }
    changeData(){
        //console.log("kiki",this)
        this.setState({
            name:"hello vidisha"
        })
    }
  render() {
    return (
      <div>
       {/* used this for expression */}
         <h1>{this.state.name}</h1> 
         {/* <button onClick={this.changeData}>Click Here </button> */}
        {/* binding event  */}
         {/* <button onClick={this.changeData.bind(this)}>Click Here </button> */}
         <button onClick={()=>{this.changeData()}}>Click Here </button>
         {/* <input type="button" value="click here" /> */}
      </div>
    )
  }
}


// arrow function is having all the power of binding and in it 'this' is already binded 

// Life cycle method of Component
// Mounting --> updating --> unmount

//mounting --> first happens at react DOM then sends data to actual DOM (broweser dom)