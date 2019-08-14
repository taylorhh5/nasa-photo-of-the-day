import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js"


export default function Nasa () {
const [pic, setPic] = useState ([]);

useEffect (()=> {
axios
.get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
.then (response => {
    console.log (response);
    console.log ("hello")
  
    const todayPic = response.data;
    setPic (todayPic);
});
}, []);


// .catch(err=> {
//     console.log (err.message);
// })
// }, []);

return (

    <div className="todayCon">
  

           <NasaCard  date={pic.date} explanation={pic.explanation} title={pic.title}
          url={pic.url}/>;
      
   
    
      {/* pic.map(item =>(
    date={pic.date}
    explanation={pic.explanation}
    title={pic.title}
    url={pic.url}
)) */}
    
    </div>

)


}
