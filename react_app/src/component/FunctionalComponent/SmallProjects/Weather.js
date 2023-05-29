import { useState } from 'react';

const api = {
  key:"be1ba14ac9309aa45dc382adedb65e2b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather(props) {

  const [search , setsearch] = useState('')
  const[weather, setweather] = useState({})

  const handleSearch = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{setweather(result) ;
        console.log(result)})
  }

  return (
    <div className='App'> 
    <header className='App-header'>
    {/* Weather */}
      <h1> Welcome to Weather app</h1>

    {/* Seacrh Box */}
    <div>
      <input type="text"  placeholder='Search..' onChange={(event) =>{setsearch(event.target.value)}}/>
       <button onClick={handleSearch}>Search</button>
    </div>

    {/* Location */}
    <p>{weather.name}</p>

    {/* Temperature */}
    <p>{weather.main.temp}</p>

    {/* Condition */}
    <p>{weather.weather[0].main}</p>
    <p>{weather.weather[0].description}</p>

    </header>
       {/* <Form /> */}
    </div>
    // <>
    // <div>Helloo</div>
    // <p>hii</p>
    // <p style={{color:'red', fontSize:'20px'}}>{props.name} her age is {props.age}</p>
    // <CC name='aaaa'/>
    // </>
    
  );
}


export default Weather;
