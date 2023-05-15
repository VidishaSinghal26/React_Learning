import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'


const data = [{num:20,operation:'increase'},
              {num:12,operation:'decrease'},
              {num:5,operation:'increase'}]
function IncreDecre() {

    let [count,setcount] = useState();
    let [display , setdisplay] = useState(count)

    const handleChange = (event) =>{
        setcount(event.target.value)
        setdisplay(event.target.value)
    }

    const renderUsers = () => {
        const result = [];
        for (let i = 0; i < data.length; i++) {
          result.push(<li>{data[i].num} <button onClick={()=>{handleClick(data[i].num,data[i].operation)}}>{data[i].operation}</button></li>);
        }
    
        return <ul>{result}</ul>;
      }

      const handleClick = (value,check)=>{
        if(check ==='increase'){
            setdisplay(Number.parseInt(display)+Number.parseInt(value))
        }
        else{
            setdisplay(display-value)
        }
      }
  return (
    <div>
      <input type="number" value={count} onChange={handleChange} />
      {/* <button onClick={handleClick}></button> */}
      <h1>{count}</h1>
      

      <h1>{renderUsers()}</h1>
      <h1>{display}</h1>
      {/* <button></button> */}
      <NavLink to='/weather'>To Weather App</NavLink>

    </div>
  )
}

IncreDecre.prototypes={
    count: PropTypes.number,
    value: PropTypes.number
}

export default IncreDecre
