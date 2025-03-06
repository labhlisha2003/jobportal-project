import { useState } from"react";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function LoginPage () {
    
    return ( 
<div className="loginPageBaseContainer">
<div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
            <h1>
                <i>
                ONLINE JOB PORTAL
                </i>
            </h1>
            <h4>`pick a job` </h4>
        </div>
        <div className="loginPageContentInputContainer">
            <CustomInput type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e)=> {
            SiGnometerminal(e.target.value);
            }}
            />
            <CustomInput type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
            />
        </div>
    </div>
</div>
    );
}

export default LoginPage;