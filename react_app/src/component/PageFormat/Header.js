import React from 'react';
import './Header.css';
import PropType from 'prop-types';

function Header(props){
    return(
        <div  className='Head_div'> 
          <header>
            <h1>{props.name}</h1>
           <ul className='Head_list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
           </ul>
          </header>
        </div>
    );
}


// function Practice(){
//   return(
//     <h1>wygbw</h1>
//   );

// }

// export default Practice;

Header.prototype={name: PropType.string.isRequired ,
                  age: PropType.number}

// Header.defaultProps={
//   name:"fcgvhbjn"
// }                  
export default Header;