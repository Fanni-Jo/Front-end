import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ServiceProvider = async ((event) => {
    event.preventDefault();
    await 
    axios.get(
        `https://fanni-jo.herokuapp.com/api/service_provider/${event.target.username.value}`,
        config
        )
    .then((res) => {
        console.log(res);
})
})
export default ServiceProvider;