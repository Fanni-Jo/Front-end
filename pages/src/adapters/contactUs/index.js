import axios from "axios";

export function contactUs(data){
    return axios.post('https://fanni-jo.herokuapp.com/contact-us', data);
  }

//   name
//   email
//   subject
//   message
export default contactUs;