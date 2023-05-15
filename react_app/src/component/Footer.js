import React from 'react';
import './Footer.css'

function Footer(props){
    return(
    <footer className='Foot_div'>
        <h1> {props.name}</h1>
    </footer>
    );
}

export default Footer;