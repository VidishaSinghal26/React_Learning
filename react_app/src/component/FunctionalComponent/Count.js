import React, { useState } from 'react'

function Count() {
    
    const [Count , setCount] = useState(0);
    //var count = 0;

    function handleClick(){
         setCount(Count + 1)
        // count = count++;
        // console.log(count++)
    }

    return (
        <div> The number of times button clicked {Count}
        <br />
        <button onClick={handleClick}>Click Me</button>
        <input type="text" value="" />
        </div>
    )
}

export default Count
