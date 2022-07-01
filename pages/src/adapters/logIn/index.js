import axios from "axios";
export function logIn(data){
    return axios.post('https://fanni-jo.herokuapp.com/login', {
        username: data.username,
        password: data.password
    });
    }

    // username
    // password

export default logIn;    