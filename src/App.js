import React from "react";
import "./App.scss";
import Nasa from "./Nasa.js";

import styled from "styled-components";


function App() {
  return (
   <div className="App">
    <h1>Nasa's photo of the day</h1>
      <Nasa/>
   </div>
  );
}

export default App;
