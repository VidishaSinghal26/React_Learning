import React from 'react';
import './SideBar.css';

function SideBar(props){
    return(
    <div className='Side_div'>
        <h2>Content</h2>
        <br />
        <ul>    
            <li><a href="https://media.istockphoto.com/id/1371547852/photo/hello-and-welcome-written-white-lightbox-sitting-on-blue-background.jpg?s=612x612&w=0&k=20&c=yHoWPj8ku6gylmAngW2QSgHY-gNaaO5baG-ozYWZq1c=">hello</a></li>
            <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntUtcUaJvE37QvXK09NP4pybUXNcNFKjQR8teklGO&s">everyone</a></li>
        </ul>
    </div>
    );
}

export default SideBar;