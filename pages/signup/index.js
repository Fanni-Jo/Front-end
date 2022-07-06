import SignupOption from "./signupOption"
import {useState} from "react"

export default function SignUp(){
    
    const{userType,setUserType} = useState(null);
    console.log(userType)
    return(
        <>
        <SignupOption/>
        </>
    )
}
