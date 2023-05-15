import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigateTo = useNavigate()
  return (
    <>
    <div>
      <h1>Welcome to about Page</h1>
    </div>
   
    <button onClick={()=> {navigateTo('/')}}>Home Page</button> 
    <button onClick={()=> {navigateTo('/contact')}}>Contact Page</button>
    <button onClick={()=> {navigateTo('/service')}}>Service page</button>

    </>
  )
}

export default About


//configuring routes
//navigation over buttons and links
//navigation programmatically
//dynamic routes
//nested routes
//routes parameters
//hooks topics
