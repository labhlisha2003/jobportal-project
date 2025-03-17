import { SiEthers } from "react-icons/si";
import ASSETS from "../../assets";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./style.css";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
function RegisterPage() {
    const [FirstName, setFirstName]=useState("@gmail.com");
    const [lastName, setlastName]=useState("");
    const [qualification, setqualification]=useState("");
    const [email, setEmail]=useState("");
    const [experience, setexperience]=useState("");
    const [password, setpassword]=useState("");
    const [confirmpassword, setconfirmpassword]=useState("");
    
    return (

        <div className="RegisterPageBaseContainer">
            <img src={require("../../assets/images/Registerimage.jpg")} ></img>

            <div className="RegisterPageContentBaseContainer">


                <div className="RegisterPageContentTitleContainer">
                    <h1><i><u>IT's TIME TO REGISTER</u></i></h1>
                </div>

                <div className="RegisterPageContentInputContainer">
             <CustomInput type={"text"} placeholder={" FirstName"} Icon={GoDotFill} onChangeText={(e) => {
                setFirstName(e.target.value);
                    }}
                    />
                    <CustomInput type={"text"} placeholder={" lastName"} Icon={GoDotFill} onChangeText={(e) =>{
                        setlastName(e.target.value);
                    }}
                    />
                    <CustomInput type={"text"} placeholder={"qualification"} Icon={GoDotFill} onChangeText={(e) =>{
                        setqualification(e.target.value);
                        }}
                         />
                    <CustomInput type={"email"} placeholder={"Email"}  Icon={GoDotFill} onChangeText={(e) => {
                        setEmail(e.target.value)
                        }}
                        />
                    <CustomInput type={"text"} placeholder={"experience"} Icon={GoDotFill} onChangeText={(e) => {
                        setexperience(e.target.value)
                    }}
                     />
                    <CustomInput type={"text"} placeholder={"password"}  Icon={GoDotFill} onChangeText={(e) => {
                        setpassword(e.target.value)
                    }}
                    />
                    <CustomInput type={"text"} placeholder={"confirm password"}  Icon={GoDotFill} onChangeText={(e) => {
                        setconfirmpassword(e.target.value)
                    }}
                    />
                </div>

                <div className="RegisterPagecontentbuttonContainer">



                </div>


            </div>
        </div>
    );
}
export default RegisterPage;