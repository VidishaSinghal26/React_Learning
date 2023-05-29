import React,{useState} from 'react'

function RandomNumber() {
    const [ random , setrandom] = useState(0);
    const handleClick =()=>{
        const r = Math.floor(Math.random()*100);
        setrandom(r);
    }
  return (
    <div className='nav'>
      <button onClick={handleClick}>Random Number</button>
      <h1>{random}</h1>
    </div>
  )
}

export default RandomNumber
