import axios from "react";
import toast, { Toaster } from "react-hot-toast";

const ServiceProviders =  ((event) => {
    event.preventDefault();
     axios.get(
        "https://fanni-jo.herokuapp.com/api/signup/service-provider",
        config
        )
    .then((res) => {
        await axios.get(`https://fanni-jo.herokuapp.com/api/user/${config.data.username.value}`,info)
    //     .then((res) => {
    //         console.log(res.data);
    // })
})})
export default ServiceProviders;