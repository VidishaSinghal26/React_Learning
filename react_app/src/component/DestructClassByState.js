import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class DestructClassByState extends Component{
    constructor(){
        super();
        this.state ={
            name:"hellooo",
            age : 20
        }
    } 

    changeData(){
        this.setState({
            name:"hihi"
        })
    }
    render(){
        const {name,age} = this.props;
        return(
            <>
            <h1>{name}</h1>
            <p>my age is {age}</p>
            <input type="button" value="click here"  onClick={() => {this.changeData()}}/>
            </>
            
        );
    }
}

// ClassCompo.prototypes={
//     name: PropTypes.string}


//setStae methood is used to redender the the component as user has changes the input data
//if eveni s callect in react then we have to use arrow function