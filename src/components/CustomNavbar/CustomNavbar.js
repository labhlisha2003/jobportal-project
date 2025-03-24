import React from "react";
import "./style.css";
import COLOR from "../../config/color";
import {useNavigate} from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { AiFillProfile } from "react-icons/ai";

function CustomNavbar(){
const navigate= useNavigate();
const links=[
    {title: "Home" ,path:"/home"},
    {title: "about us", path:"/about us"},
    {title: "jobs", path:"/jobs"},
    {title: "blog", path:"/blog"},

];
return(
    <div className="CustomNavbarBaseConatiner">
     <div className="CustomNavbarLogoContainer">
        <ImProfile
        className="navbarLogoIcon"
        size={40}
        color={COLOR.basecolordark}/>
     </div>
<div className="CustomNavbarLinkContainer">
  
</div>
<div className="CustomNavbarProfileContainer">
    < AiFillProfile size={40} color={COLOR.basecolordark} />
</div> 
</div>
);
}
export default CustomNavbar;