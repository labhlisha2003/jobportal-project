import{ signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../components/CustomButton/CustomButton";
import{useState} from"react";
import CustomInput from "../../components/CustomInput/CustomInput";

import "./style.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import {FaUserAlt } from "react-icons/fa";
import { FaKey} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, database} from "../../firebase";
import {ref, set} from "firebase/database";

function LoginPage() {
    const [email, setEmail]= useState("gmail.com");
    const [name, setname]=useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("login");
    const navigate = useNavigate();

 const handlelogin= ()=> {
    localStorage.setItem("uid", "AIzaSyAGJYPg9rzCo3q6NiU639pTqQ8lSO3qQr");
 };
    const handleLogin = async () => {
        try {
            if (email == "" ||  password == "") alert("Please fill out the fields");
            else {
                setButtonText("Please Wait...");
                const response = await signInWithEmailAndPassword(
                    auth,
                    name,
                    email,
                    password
                );
                setButtonText("login");
                if (response.user.uid) {
                    navigate("/home")
                }
            }
        } catch (err) {
            setButtonText("login");
            setEmail("");
            alert(err);
        }
    };
    return (
      <div
       className="loginPageBaseContainer">
        <img src={require("../../assets/images/firstimage.jpg")}></img>
            <div className="loginPageContentBaseContainer">
                <div className="loginPageContentTitleContainer">
                    <h1>ONLINE JOB PORTAL's</h1>
                     </div>
                     <h2>lets get a job</h2>
                     <h4>{`Welcome $(email)`}</h4> 
                <div className="loginPageContentInputContainer">
                <CustomInput type={"text"} placeholder={"Enter Name"} Icon= { MdDriveFileRenameOutline} inputvalue={name}onChangeText={(e)=>{setname(e.target.value)}}/>
                <CustomInput type={"email"} placeholder={"Enter Email"} Icon={FaUserAlt} inputValue={email} onChangeText={(e) => {setEmail(e.target.value)}}/>
                
                <CustomInput type={"password"} placeholder={"Enter Password"} Icon={FaKey} isSecureEntry={true}/>
                </div>
                <div className="loginPagecontentButtonContainer">
                    <button onClick={handleLogin}> </button>{""}
                <CustomButton color={"white"} backgroundColor={"#001f2d"} title={"login"}/>
                </div>

                <div className="loginPageContentRegisterContainer"></div>
        
            </div>
        </div>
    );
}
export default LoginPage;