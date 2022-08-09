import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import axios from "../../constants/axios";
import { API_KEY, Image_Url } from "../../constants/constants";
import YouTube from "react-youtube";

function MovieCard({ title, isOriginals, url }) {
  const [id, setId] = useState("");
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const handleClick = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setId(res.data.results[0].key);
      })
      .catch((err) => console.log(err));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="movies_container">
        <h1>{title}</h1>
        <div className="movie_card">
          {movie ? movie.map((val) => {
            return (
              <>
                <div className="card_container" key={val.id}>
                  <img
                    className={isOriginals ? "poster" : "smallPoster"}
                    src={`${Image_Url + val.poster_path}`}
                    onClick={() => handleClick(val.id)}
                    alt="poster_img"
                  />
                </div>
              </>
            );
          }) : null }
        </div>

        {id && <div className="video_container"> <button className="close_btn" onClick={()=>setId("")}><i class="fa-solid fa-xmark"></i></button> <YouTube videoId={id} opts={opts} /></div> }
        
      </div>
    </>
  );
}

export default MovieCard;
