import Image from "next/image";
import pic13 from "../src/img/portfolio/15.svg";
import { useThemeContext } from "../context/Theme";
import axios from "axios";
import { useSpContext } from "../context/Serviceproviders";
import Link from "next/link";
import { useStateContext } from "../context/categoryState";
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
  }, []);

  useEffect(() => {
    reviewGetter();
  }, []);
  console.log("serviceprovider", serviceprovider);
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
      .then(reviewGetter(), alert("Thank you for your review"));
  };

  console.log("user", user);
  const reviewGetter = async () => {
    await axios
      .get("https://fanni-jo.herokuapp.com/api/review-provider/")
      .then((res) => {
        setReviews(res.data);
      });
  };

  return (
    
    <>
      <div class="container">
        <div class="be-comment-block">
          {reviews &&
            reviews.map((rev, id) => {
              if (
                rev.service_provider ===
                (serviceprovider.first_name + " " + serviceprovider.last_name)
              ) {
                return (
                  <>
                    <h1 class="comments-title">Review {id + 1}</h1>
                    <div class="be-img-comment">
                      <a href="blog-detail-2.html">
                        <Image src={pic13} alt="" class="be-ava-comment" />
                      </a>
                    </div>
                    <div class="be-comment-content">
                      <span class="be-comment-name">
                        <a href="blog-detail-2.html">{rev.username}</a>
                      </span>

                      <span class="be-comment-time">
                        <i class="fa fa-clock-o"></i>
                        {rev.created_date}
                      </span>
                      <h6 className="text-warning">{rev.rating} stars </h6>
                      <p class="be-comment-text">{rev.review}</p>
                    </div>
                  </>
                );
              }
            })}
        </div>
      </div>
      {islogin ? (
        <form class="form-block container mb-5" onSubmit={reviewCreator}>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <label for="rating" className="m-2">
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
            <div class="col-xs-12">
              <div class="form-group">
                <input
                  class="form-input"
                  required
                  placeholder="write Your review here"
                  id="review"
                  type="text"
                />
              </div>
            </div>
			<div className="text-center ">
            <button class="btn btn-primary pull-right col-sm-6 ">submit</button>
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
    //   </div>
    // </div>
  );
};

export default Commit;
