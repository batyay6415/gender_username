import React, { useState } from "react";
import dataService from "../../../Services/DataService";
import "./Home.css";


function Home(): JSX.Element {

    const [gender, setGender] = useState('');
    const [national, setNational] = useState([""]);
    const usernameRef = React.useRef<any>();
   

        const handleSubmit = async (event: any) => {
         event.preventDefault();
          const name = usernameRef.current.value
          console.log(name);
         let response1 =  await dataService.getGender(name);
         console.log(response1);
         
         setGender(response1);
          
          const response = await dataService.getNationality(name);
         console.log(response);
         
          setNational(response);


        };
      
    return (
        <div>

   <form id="form">
    
      <label>
      Enter your name:
        <input ref={usernameRef} />
      </label>

      <br />
      <br />
      <button onClick={handleSubmit}>Gender</button>
      <br />
      <br />
      <button onClick={handleSubmit}>National</button>
    </form>
    
     {gender && <p>Gender: {gender}</p>}

     {national && <p>National: {national}</p>}

        </div>
    );
}

export default Home;








