import React from "react";


const NasaCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <div className="nasa-card ">
      <img  src={props.url} />
      <h2>{props.title}</h2>
    
    </div>
  );
};
export default NasaCard;
