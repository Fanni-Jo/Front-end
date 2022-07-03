import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ClientSignup() {
  // const [file, setFile] = useState([]);
  // function handleChange(e) {
  //     console.log(e.target.files[0].name);
  //     setFile(...file,URL.createObjectURL(e.target.files[0]));

  // }
  // console.log(file)

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

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
      <div className=" signup">
        <div className="container register-container ">
          <div className="row ">
            <div className="col-md-6 offset-md-3 borderform">
              <div className="signup-form">
                <form className="mt-5 ">
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
                        id="form6Example1"
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
                        id="form6Example2"
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
                        id="form6Example3"
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
                        id="form6Example5"
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
                        id="form6Example3"
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
                        id="form6Example3"
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
                        id="form6Example3"
                        className="form-control"
                        placeholder="+962"
                        required
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
                        id="form6Example4"
                        className="form-control "
                        placeholder="Amman"
                        required
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6  text-center">
                      <label
                        className="form-label text-light"
                        for="form6Example7"
                      >
                        Birth Date
                      </label>
                      <DatePicker 
                        selected={date}
                        onChange={(date) => setDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className="form-control"
                      />
                    </div>
                    

                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6 mb-3">
                      <label
                        className="form-label text-light"
                        for="form6Example7"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="p-2 dropdown "
                        required
                      >
                        <option className="option" value="plumbing">
                          Male
                        </option>
                        <option className="option" value="carpinting">
                          Female
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="col-md-12 col-sm-12 col-lg-6 mb-3 profile-image  ">
                      <label
                        className="form-label text-light"
                        for="form6Example7"
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        id="imageFile"
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
