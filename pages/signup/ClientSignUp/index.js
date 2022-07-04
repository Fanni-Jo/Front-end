import { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from 'next/router'

export default function ClientSignup() {
  const router = useRouter();
  const [islogin, setlogin] = useState(false);
  const [date, setDate] = useState();
  // const [token,seToken] = useState()
  // const config={headers:{'Authorization': `Bearer ${token}`}}
  console.log('date',date)

  const signUpClient = async (event) => {
    event.preventDefault();
    await axios
      .post("https://fanni-jo.herokuapp.com/api/signup/", {
        username: event.target.username.value,
        password: event.target.password.value,
        re_password: event.target.re_password.value,
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
      })
      .then(async (res) => {
        await axios
          .post("https://fanni-jo.herokuapp.com/token/", {
            username: event.target.username.value,
            password: event.target.password.value,
          })
          .then(async (res) => {
            // localStorage.setItem("jwt", res.data.access);
            // seToken(res.data.access)
            // setlogin(true);
            await axios
              .get(
                `https://fanni-jo.herokuapp.com/api/user/${event.target.username.value}`
              )
              .then( async (id) => {
                // localStorage.setItem("id", id.data.id);
                await axios
                  .post("https://fanni-jo.herokuapp.com/api/signup/client", {
                    phone_number: event.target.phone_number.value,
                    profile_picture: event.target.profile_picture,
                    birthdate: date,
                    gender: event.target.gender.value,
                    username: id.data.id
                  },{headers:{'Authorization': `Bearer ${res.data.access}`}})
                  .then(
                    console.log("client signup success"),
                    router.push('/Login')
                  )
                  .catch(console.log("client signup error"));
              })
          })
        console.log(res);
        console.log(res.data);
      })
      .catch(() => {
        toast.error("Username or Password is already registerd");
      });
    event.target.reset();
  };

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);

  const togglePassword = (evnt) => {
    evnt.preventDefault();
    setShow(!show);

    if (show === true) {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="signup">
        <div className="container register-container ">
          <div className="row ">
            <div className="col-md-6 offset-md-3 borderform">
              <div className="signup-form">
                <form className="mt-5 " onSubmit={(e) => signUpClient(e)}>
                  <div className="row">
                    <h3 className="text-center ">Registration Form</h3>

                    <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                      <label
                        className="form-label text-light"
                        for="form6Example1"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="form-control"
                        placeholder="Jack"
                        required
                      />
                    </div>

                    <div className="mb-3 col-md-6 col-sm-12 col-lg-6">
                      <label
                        className="form-label   text-light"
                        for="form6Example2"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="form-control"
                        placeholder="Nir"
                        required
                      />
                    </div>

                    <div className="col-md-12  col-sm-12  mb-3">
                      <label
                        className="form-label  text-light"
                        for="form6Example3"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="JohnWick"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12  mb-3">
                      <label
                        className="form-label  text-light"
                        for="form6Example5"
                      >
                        E-Mail Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="john13@gmail.com"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                      <label
                        className="form-label  text-light"
                        for="form6Example3"
                      >
                        Password
                      </label>
                      <input
                        type={passwordType}
                        id="password"
                        className="form-control "
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-6 mb-3">
                      <label
                        className="form-label  text-light text-fixed"
                        for="form6Example3"
                      >
                        Confirm Password
                      </label>
                      <input
                        type={passwordType}
                        id="re_password"
                        className="form-control "
                        placeholder="Re-enter your password"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-12 text-center">
                      <button
                        className="btn btn-dark form-label text-fixed"
                        onClick={togglePassword}
                        for="form6Example3"
                      >
                        Show Password
                      </button>
                    </div>

                    <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                      <label
                        className="form-label text-light"
                        for="form6Example3"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone_number"
                        className="form-control"
                        placeholder="+962"
                        required
                        defaultValue="+962"

                      />
                    </div>

                    <div className="col-md-6 col-sm-12 col-lg-6 mb-3">
                      <label
                        className="form-label text-light"
                        for="form6Example4"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="form-control "
                        placeholder="Amman"
                        required
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6  text-center">
                      <label
                        className="form-label text-light"
                        for="form6Example7"
                        id="birthdate"
                      >
                        Birth Date
                      </label>
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date.getFullYear() + "-" + (date.getMonth()) + "-" + date.getDate())}
                        dateFormat="yyyy-MM-dd"
                        peekNextMonth
                        dropdownMode="select"
                        className="form-control"
                      />
                    </div>

                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6 mb-3">
                      <label
                        className="form-label text-light"
                        for="form6Example7"
                        id="gender"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="p-2 dropdown "
                        required
                      >
                        <option className="option" value="MALE">
                          Male
                        </option>
                        <option className="option" value="FEMALE">
                          Female
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-lg-6 mb-3 profile-image  ">
                    <label
                      className="form-label text-light"
                      for="form6Example7"
                      id="profile_picture"
                    >
                      Profile Image
                    </label>
                    <input
                      type="file"
                      id="profilePicture"
                      name="files"
                      accept="image/*"
                      className="text-light  input-hub"
                      list
                      multiple
                    />
                    <div id="display-image"></div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-block mb-4 registerbtn"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
