// import logo from './logo.svg';
import Home from './component/Home'
import {Link} from 'react-router-dom'
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import About from './component/About';
import NavBar from './component/NavBar'
import PageNotFound from './component/PageNotFound';
import Contact from './component/Contact';
import Service from './component/Service';
import Product from './component/Product';
import Jeans from './component/Jeans';
import Shirt from './component/Shirt';
import Users from './component/Users';
import UseDetails from './component/UseDetails';
import Count from './component/Count'
import Weather from './component/Weather';

function App() {
  const navigate  = useNavigate();
  const  navigateTo = (url) =>{
    navigate(url);
  }
  return (
    <>
     <NavBar />
     <Routes>
        <Route  path = '/' element = {<Home name='vidisha'/>} />
        <Route  path = '/about' element = {<About/>} />
        <Route  path = '/contact' element = {<Contact/>} />
        <Route  path = '/service' element = {<Service/>} />
        <Route  path = '/product' element = {<Product/>} >
            <Route index element = {<Shirt/>} />
            <Route  path = 'shirt' element = {<Shirt/>} />
            <Route  path = 'jeans' element = {<Jeans/>} />
        </Route>
        <Route  path = '/user' element = {<Users/>} >
            <Route path = '1' element = {<UseDetails/>} />
            <Route path = '2' element = {<UseDetails/>} />
            <Route path = '3' element = {<UseDetails/>} />
        </Route>
        <Route  path = '/weather' element = {<Weather/>} />
       <Route  path = '*' element = {<PageNotFound/>} />
      </Routes>   
      <br />
      {/* <button onClick={()=> {navigateTo('/')}}>Click Here</button> 
      <button onClick={()=> {navigateTo('/about')}}>Click Here</button> 
      <button onClick={()=> {navigateTo('/contact')}}>Click Here</button>
      <button onClick={()=> {navigate('/service')}}>Click Here</button>
      <button ><Link to='/about'>Click here</Link></button> */}
    </>
  );
}

export default App;
