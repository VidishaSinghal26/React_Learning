import React from 'react'

//function
function Events(props) {

    //Event
    function HandleData(){
        // alert("hello everyOne")
        alert(props.name)
    }
  return (
    <div>
        <input type="button" value="click here"  onClick={()=>{HandleData()}}/>
    </div>
  )
}

export default Events
