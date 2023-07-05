import React from "react";
import Logos from "./Logos";
import BodyFirstContainer from "./Body-1";
import BodySecondContainer from "./Body-2";
import BodyThirdContainer from "./Body-3";
import BodyFourthContainer from "./Body-4";
import BodyFifthContainer from "./Body-5";
import './index.css'

const Body = () =>{
return(
    <div className="body-main">
      <Logos/> 
      <BodyFirstContainer/> 
      <BodySecondContainer/>
      <BodyThirdContainer/>
      <BodyFourthContainer/>
      <BodyFifthContainer/>
    </div>
)
}
export default Body;