import axios from "react";
import toast, { Toaster } from "react-hot-toast";

const ServiceProviders = async ((event) => {
    event.preventDefault();
    await 
    axios.get(
        "https://fanni-jo.herokuapp.com/api/service_provider",
        config
        )
    .then((res) => {
        await axios.get(`https://fanni-jo.herokuapp.com/api/user/${config.data.username.value}`,info)
        .then((res) => {
            console.log(res);
    })
})})
export default ServiceProviders;