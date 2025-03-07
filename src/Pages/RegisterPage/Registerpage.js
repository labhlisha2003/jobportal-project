
import CustomInput from "../../components/CustomInput/CustomInput";
// import COLOR from "../..config/color";
import "./style.css";
function RegisterPage() {
    return(
        <div className="RegisterPageBaseContainer">
            <img src="RegisterPageImage.jpg"> </img>
             <div className="RegisterPageContentBaseContainer">
                <div className="RegisterPageContentTitleContainer">
                    <h1>CREATE YOUR PROFILE</h1>
                     </div>
                    
                <div className="RegisterPageContentInputContainer">
                <CustomInput type={"text"} placeholder={" FirstName"}  />
                <CustomInput type={"text"} placeholder={" lastName"}  />
                <CustomInput type={"text"} placeholder={"qualification"}/>
                <CustomInput type={"email"} placeholder={"Email"}/>
                <CustomInput type={"text"} placeholder={"experience"}/>
                </div>
                <div className="RegisterPagecontentbuttonContainer">
                    
            
                
                </div>
    
        
            </div>
        </div>
    );
}
export default RegisterPage;