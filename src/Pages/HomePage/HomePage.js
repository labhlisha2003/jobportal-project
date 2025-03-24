import React from "react";
import ASSETS from "../../assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./style.css";
import {useState ,useEffect} from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import {Outlet, useNavigate} from "react-router-dom";

function HomePage() {
    const [name,setName]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const uid=localStorage.getItem("uid");
        if(!uid){
            navigate("/");
        }
    },[]
);
return(
    <div className="baseContainer">
             <img src={require("../../assets/images/firstimage.jpg")} ></img>
             <div className="homePageNavbarBaseContainer"  > 
                <CustomNavbar/>
             </div>
             <div className="homePageContentBaseContainer"> 
                <Outlet/>
             </div>
    </div>
)
}
export default HomePage; 