import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const signUpClient = async (event,data1,data2) => {
    event.preventDefault();
      await axios.post("https://fanni-jo.herokuapp.com/api/signup/", {
          username: event.target.username.value,
          password: event.target.password.value,
          re_password: event.target.re_password.value,
          first_name:event.target.first_name.value,
          last_name:event.target.last_name.value,
          email:event.target.email.value,
        }).then( async (res) => {
            await axios.get(`https://fanni-jo.herokuapp.com/api/user/${event.target.username.value}`)
            .then((res) => {
                axios.post("https://fanni-jo.herokuapp.com/api/signup/client", {
                username: res.data.username.value,
                gender: event.target.gender.value,
                birthdate: event.target.birthdate.value,
                phone_number:event.target.phoneNumber.value,
                profile_picture:event.target.profilePicture
            })
            })
            
            // console.log(res);
            // console.log(res.data);
        }).catch(() => {
            toast.error("Please Make Sure All required Fields are filled out");
          })
          event.target.reset();

  };
export default signUpClient;
//   email: 
// first_name: 
// last_name: 
// password: 
// re_password: 
// username: 