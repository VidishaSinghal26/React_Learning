import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
        <div>
            <h1>This  is  a Product Page</h1>
        </div>
        <nav>
            <NavLink to="shirt"> Shirts </NavLink>
            <NavLink to="jeans"> Jeans</NavLink>
        </nav>
        <Outlet/>
    
    </>
   
  )
}

export default Product
