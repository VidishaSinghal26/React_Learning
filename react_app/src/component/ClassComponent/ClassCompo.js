import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class ClassCompo extends Component{
    constructor(){
        super();
        console.log("vtyfvgbujkn");
    } 
    render(){
        return(
            <>
            <h1>gvbjhn</h1>
            <p>mu name is {this.props.name}</p>
            </>
            
        );
    }
}

ClassCompo.prototypes={
    name: PropTypes.string}