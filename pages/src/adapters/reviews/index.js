import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const reviewGetter = async (event) => {
    event.preventDefault();
    await axios.get(
        `https://fanni-jo.herokuapp.com/api/review/`,
        config
        )
    .then((res) => {
        console.log(res);
})
}
export const reviewPost = async (event) => {
    event.preventDefault();
    await axios.post(
        `https://fanni-jo.herokuapp.com/api/review/`,{
        stars: event.target.stars.value,
        text: event.target.comment.value,
        username: event.request.username.value,
    }
        )
    .then((res) => {
        console.log(res);
})
}