import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class ClassCompoState extends Component{
    constructor(){
        super();
        this.state ={
            name:"hellooo"
        }
    } 
    changeData(){
        this.setState({
            name:"vidisha"
        })
    }
    render(){
        return(
            <>
            <h1>gvbjhn</h1>
            <p>my name is {this.state.name}</p>
            <input type="button" value="click here"  onClick={this.changeData}/>
            </>
            
        );
    }
}

ClassCompoState.prototypes={
    name: PropTypes.string
}


//setStae methood is used to redender the the component as user has changes the input data
//if eveni s callect in react then we have to use arrow function