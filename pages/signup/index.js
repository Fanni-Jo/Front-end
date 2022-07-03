import Form from "./WorkerSignUp"
import SignupOption from "./signupOption"

export default function SignUp(){
    
    const{userType,setUserType} = useState(null);
    console.log(userType)
    return(
        <>
        {/* <Form /> */}
        <SignupOption/>
        </>
    )
}
