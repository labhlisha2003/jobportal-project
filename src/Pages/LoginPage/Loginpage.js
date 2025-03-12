import{useState} from"react";
import CustomInput from "../../components/CustomInput/CustomInput";

import "./style.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import {FaUserAlt } from "react-icons/fa";
import { FaKey} from "react-icons/fa";


function LoginPage() {
    const [email, setEmail]= useState("gmail.com");
    return (

        <div className="loginPageBaseContainer">
            <img src={require("../../assets/images/job image 1_enhanced.jpg")} ></img>
            <div className="loginPageContentBaseContainer">
                <div className="loginPageContentTitleContainer">
                    <h1>ONLINE JOB PORTAL's</h1>
                     </div>
                     <h2>lets get a job</h2>
                     <h4>{`Welcome $(email)`}</h4>
                <div className="loginPageContentInputContainer">
                <CustomInput type={"text"} placeholder={"Enter Name"} Icon= { MdDriveFileRenameOutline}/>
                <CustomInput type={"email"} placeholder={"Enter Email"} Icon={FaUserAlt} inputValue={email}onChangeText={(e) => {setEmail(e.target.value);
                }}
                />
                <CustomInput type={"password"} placeholder={"Enter Password"} Icon={FaKey} isSecureEntry={true}/>
                </div>
                <div className="loginPagecontentButtonContainer">
                    <button type="submit">log in</button>
            
                
                </div>

                <div className="loginPageContentRegisterContainer"></div>
        
            </div>
        </div>
    );
}
export default LoginPage;