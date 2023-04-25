import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'c6111ef581f4421c5b2e157748f6be26',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios.get(`/trending/movie/week?${searchParams}`);
};
export const searchMovies = name => {
  return axios.get(`/search/movie?${searchParams}&query=${name}`);
};
export const getMovieDetails = id => {
  return axios.get(`/movie/${id}?${searchParams}`);
};
export const getMovieCredits = id => {
  return axios.get(`/movie/${id}/credits?${searchParams}`);
};
export const getMovieReviews = id => {
  return axios.get(`/movie/${id}/reviews?${searchParams}`);
};

