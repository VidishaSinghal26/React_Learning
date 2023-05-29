import { Component } from "react";

class CountClass extends Component{
    constructor(){
        super();
        this.state={
            count:true,
            show:'hello'
        }
    }

    handleClick=()=>{
        if(this.state.count === true){
            this.setState({
                count: false,
                show : 'bye'
            })
        }
        else{
            this.setState({
                count:true,
                show:'hello'
            })
        }
        
    }

    render(){
        return(
            <>
            <div>The number of times button clicked {this.state.show}</div>
            <input type="button"  value="click me" onClick={this.handleClick}/>
            </>
            
        )
    }
}

export default CountClass