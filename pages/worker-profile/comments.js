import Image from "next/image";
import pic13 from "../src/img/portfolio/15.svg";
import { useThemeContext } from "../../context/Theme";
import axios from "axios";
import { useSpContext } from "../../context/Serviceproviders";
import Link from "next/link";
import { useStateContext } from "../../context/categoryState";
import { useState, useEffect } from "react";

const Commit = ({ slug }) => {
  const [islogin, setlogin] = useThemeContext();
  const [user, setuser] = useThemeContext();
  const [serviceprovider, setserviceprovider] = useState('');
  const [serviceProviders, setServiceProviders] = useSpContext();
  const [iduser, setiduser] = useStateContext();
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    
    serviceProviders.map((data) => {
      if (data.username == slug) {
        setserviceprovider(data);
      }
    });
  });

  useEffect(() => {
    reviewGetter();
  });
  // console.log("serviceprovider", serviceprovider);
  const reviewCreator = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://fanni-jo.herokuapp.com/api/review-provider/",
        {
          username: user,
          service_provider:
            serviceprovider.first_name + " " + serviceprovider.last_name,
          subject: "",
          review: e.target.review.value,
          rating: e.target.rating.value,
        },
        localStorage.getItem("jwt")
      )
      .then(
        reviewGetter(),
      //  alert("Thank you for your review")
       );
  };

  // console.log("user", user);
  const reviewGetter = async () => {
    await axios
      .get("https://fanni-jo.herokuapp.com/api/review-provider/")
      .then((res) => {
        setReviews(res.data);
      });
  };

  return (
    
    <>
      <div className="container" key="whole">
        <div className="be-comment-block" key="in">
          {reviews &&
            reviews.map((rev, id) => {
              if (
                rev.service_provider ===
                (serviceprovider.first_name + " " + serviceprovider.last_name)
              ) {
                return (
                  <>
                    <h1 className="comments-title" key={"rev"+id}>Review {id + 1}</h1>
                    <div className="be-img-comment" key={"imgdiv"+id}>
                      <a href="blog-detail-2.html" key={"ankera"+id}>
                        <Image src={rev.profile_picture||pic13} width='60' height='60' alt="" className="be-ava-comment" key={"img"+rev.username}/>
                      </a>
                    </div>
                    <div className="be-comment-content" key={"username"+id}>
                      <span className="be-comment-name" key={"usernamespan"+id}>
                        <a href="blog-detail-2.html" key={"user"+id}>{rev.username}</a>
                      </span>

                      <span className="be-comment-time" key={"timediv"+id}>
                        <i className="fa fa-clock-o" key={"time"+id}></i>
                        {rev.created_date}
                      </span>
                      <h6 className="text-warning" key={"stars"+id}>{rev.rating} stars </h6>
                      <p className="be-comment-text" key={"timedive"+id}>{rev.review}</p>
                    </div>
                  </>
                );
              }
            })}
        </div>
      </div>
      {islogin ? (
        <form className="form-block container mb-5" onSubmit={reviewCreator}>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <label htmlFor="rating" classNameName="m-2">
                Rate
              </label>
              <select id="rating" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="col-xs-12">
              <div className="form-group">
                <input
                  className="form-input"
                  required
                  placeholder="write Your review here"
                  id="review"
                  type="text"
                />
              </div>
            </div>
			<div className="text-center ">
            <button className="btn btn-primary pull-right col-sm-6 ">submit</button>
          </div>
          </div>
        </form>
      ) : (
        <p className="text-center lead mb-5">
          {" "}
          <Link href="/Login">
            <a>Login</a>
          </Link>{" "}
          to write your review
        </p>
      )}
    </>

  );
};

export default Commit;
