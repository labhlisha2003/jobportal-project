import React from "react";
import "./styles.css";
import { IoLogoDesignernews } from "react-icons/io5";
import { MdAddLocation } from "react-icons/md";
import COLOR from "../../config/color";
function Fresher(){
return<div className="FirstBasseContainer">
    <img src={require("../../assets/images/freherrrimage.jpg")}/>
    <div className="FirstGridBoxContent">
    <IoLogoDesignernews size={40} color={COLOR.blackColor}  />
    <h1>Fashion Designer</h1>
    <MdAddLocation size={35} color={COLOR.blackColor} />
    { <h2>Jorasanko, Kolkata/Calcutta</h2> }
    <button className="Button"> apply</button>
    </div>
    <div className="SecondGridBoxContent"></div>
     <div className="ThirdGridBoxContentss"></div>
   </div>
}
export default Fresher;

