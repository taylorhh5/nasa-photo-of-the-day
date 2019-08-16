import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Drop from "./Drop"
const NasaCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    // <div className="nasa-card ">
    //   <img  src={props.url} />
    //   <h2>{props.title}</h2>
    //   <h3>{props.date}</h3>
    //   <h3>{props.explanation}</h3>
 
 
 // </div>

 <div className="nasa-card ">
<img  src={props.url} />
<div className= "nasa-card2">
<Card >

<Drop/>
</Card>

  <Card>

    <Card.Content header={props.title} />
    <Card.Content description={props.explanation} />
  
  </Card>

  <Card
  header="Today's date is:"
    
    
    
    description={props.date}
    image='\images\astro.jpg'
  />
  
  </div>
    </div>
  );
};
export default NasaCard;
