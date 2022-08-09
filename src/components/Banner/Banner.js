import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../constants/axios";
import { API_KEY } from "../../constants/constants";
import { Image_Url } from "../../constants/constants";

function Banner() {
  const [movieBanner, setmovieBanner] = useState([]);

  useEffect(() => {
    axios
      .get(`/trending/all/day?api_key=${API_KEY}`)
      .then((response) => {
        setmovieBanner(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      })
      .catch((err) => console.log(err));
  }, []);

  let overview = movieBanner.overview;
  let shortOverview = (overview && overview.substring(0, 200));
      shortOverview= shortOverview &&(shortOverview.substring(0,Math.min(shortOverview.length,shortOverview.lastIndexOf(" ")))+'....');

  return (
    <>
      <div
        className="banner_container"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.1),#111 ),url(${
            movieBanner ? Image_Url + (movieBanner.backdrop_path ? movieBanner.backdrop_path : movieBanner.poster_path) : ""
          })`,
        }}
      >
        <div className="bannner_movie_details">
        <h1 className="bannner_movie_title">
          {movieBanner.title ? movieBanner.title : movieBanner.name}
        </h1>
        <p className="bannner_movie_desc">
          {movieBanner ? shortOverview : ""}
        </p>
        <div className="banner_btn">
          <button className="btn btn1">
            <i class="fa-solid fa-play"></i>Play
          </button>
          <button className="btn btn2">
            <i className="fa-solid fa-plus"></i>My List
          </button>
        </div>
        </div>
        <div className="fade"></div>
      </div>
    </>
  );
}

export default Banner;
