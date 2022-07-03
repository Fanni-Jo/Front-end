import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = async ((event) => {
    axios.post('https://fanni-jo.herokuapp.com/api/password-reset/', {
        email: event.target.email.value}
        ).then(
            toast.success("Password Reset Link has been sent to your email")
        ).catch(
            toast.error("This Email Is Not Registered")
        )
})

export default ResetPassword;