import React from 'react'


function Destruct(props ) { // or function Destruct ({name,age})
    const {name,age} =props;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default Destruct
