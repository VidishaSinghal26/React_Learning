import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home(props) {
 const navigate = useNavigate();
 const navigateTo= (url)=>{
 navigate(url)
 }

  const {name} = props;
  return (
    <>
     <div>
     <h1>Welcome to Home Page , {name} </h1>
    </div>
    {/* <button onClick={()=> {navigateTo('/')}}>Click Here</button>  */}
      <button onClick={()=> {navigateTo('/about')}}>About Page</button> 
      <button onClick={()=> {navigateTo('/contact')}}>Contact Page</button>
      <button onClick={()=> {navigate('/service')}}>Service Page</button>
    </>
   
  )
}

export default Home
