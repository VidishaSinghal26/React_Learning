import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar from './component/SideBar'
import ClassCompo from './component/ClassCompo';
import ClassCompoState from './component/ClassCompoState';
import Destruct from './component/Destruct';
import DestructClass from './component/DestructClass';
import DestructClassByState from './component/DestructClassByState';
import Events from './EventHandaling/Events';
import EventBinding from './EventHandaling/EventBinding';
import CountClass from './component/CountClass';
import Hooks from './component/Hooks';
import Count from './component/Count';
import IncreDecre from './component/IncreDecre';
import RandomNumber from './component/FunctionalComponent/SmallProjects/RandomNumber';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
         <RandomNumber/>
    </BrowserRouter>
   
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Destruct name = "hui" age ={14} />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <DestructClass name = "vidisha" age ={20} />

// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <DestructClassByState name = "vidisha" age ={20} />

// );

// const event = ReactDOM.createRoot(document.getElementById('data'));
// event.render(
//   < Events name="lolo"/>
// )

// const event = ReactDOM.createRoot(document.getElementById('data'));
// event.render(
//   < EventBinding name="lolo"/>
// )

// const ccompo = ReactDOM.createRoot(document.getElementById('data'));
// ccompo.render(
//   < ClassCompo name="hello"/>
// )

// const ccompostate = ReactDOM.createRoot(document.getElementById('data'));
// ccompostate.render(
//   < ClassCompoState />
// )

// const header = ReactDOM.createRoot(document.getElementById('root'));
// let arr = ["mk","kk","ed"];
// header.render(
//   <Header 
//           age={18}
//           isplace={true}
//           branch={arr} />
// );
// const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
// sidebar.render(
//   <SideBar name="nhfurbfu"/>
// );
// const footer = ReactDOM.createRoot(document.getElementById('footer'));
// footer.render(
//   <Footer name="Vidisha" />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
