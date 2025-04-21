import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function WorkfromhomePage (){
    
      const navigate = useNavigate();
    
      const gotojobs = () => {
        navigate('/fresher'); 
      }
return ;
}
export default WorkfromhomePage ;