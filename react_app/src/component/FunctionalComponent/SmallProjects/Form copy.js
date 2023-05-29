import { useState } from 'react';

export default function Form() {
  const [Name, setName] = useState('');
  const [Surname, setSurName] = useState('');
  const [fullname,Setfullname] = useState(Name+Surname);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange1 = (event) =>{
    setSurName(event.target.value)
  }

  function handleClick() {
    // 👇 "message" stores input field value
    <div>
    Setfullname(Name+" "+Surname);
    console.log({Name})
    </div>
    
    // alert({fullname})
    
   // <h2></h2>

  };

  return (
    <div>
      Name: <input type="text" value={Name} onChange={handleChange} /> <br />
      Surname: <input type="text" value={Surname} onChange={handleChange1} />
      <h2>{Name}</h2>
      <h2>{Surname}</h2>

      <button onClick={()=>handleClick}>Display</button>
    </div>
  );
}