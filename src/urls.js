import { API_KEY } from "./constants/constants";

export const Originals = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_network=123&with_watch_monetization_types=flatrate`;
export const Trending = `/trending/all/day?api_key=${API_KEY}`;
export const Action = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;
export const Comedy = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35&with_watch_monetization_types=flatrate`;
export const Romance = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749&with_watch_monetization_types=flatrate`;
export const Documentary=`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=99&with_watch_monetization_types=flatrate`;
