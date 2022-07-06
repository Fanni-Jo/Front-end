import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

const ServiceProvider =  ((event) => {
    event.preventDefault();
     axios.get(
        `https://fanni-jo.herokuapp.com/api/service_provider/${event.target.username.value}`,
        config
        )
//     .then((res) => {
//         console.log(res.data);
// })
})
export default ServiceProvider;