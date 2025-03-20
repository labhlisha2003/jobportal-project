import React from "react";
import ASSETS from "../../assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./style.css";
import {useState } from "react";

function HomePage() {
    const [name,setName]=useState("");
return(
    <div className="baseContainer">
             <img src={require("../../assets/images/homepagefirstimage.jpg")} ></img>
             <div className="homePageNavbarBaseContainer"  > 
                <CustomNavbar/>
             </div>
             <div className="homePageContentBaseContainer"> 
                <outlet/>
             </div>
    </div>
)
}
export default HomePage; 