import React from "react";
import "./style.css";
import COLOR from "../../config/color";
import {useNavigate} from "react-router-dom";


function CustomNavbar(){
const navigate=useNavigate();
const links=[
    {title: "Home"},
    {title: "about us"},
    {title: "jobs"},
    {title: "blog"},

];
return(
    <div className="CustomNavbarBaseConatiner">
     <div className="CustomNavbarLogoContainer">
        className="navbarLogoIcon"
        size={}
        color={COLOR.blackColor}
     </div>
<div className="CustomNavbarLinkContainer">
    {}
</div>
<div className="CustomNavbarProfileContainer">
    < size={} color={COLOR.black}/>
</div>
</div>
);
}
export default CustomNavbar;