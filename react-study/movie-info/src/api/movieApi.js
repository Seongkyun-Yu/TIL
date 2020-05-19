import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '10923b261ba94d897ac6b81148314a3f', language: 'en-US' },
});

//참고해서 사용해보세요
export const movies = {
  getMovie: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: 'videos' } }),
  getPopular: () => api.get('movie/popular'),
  getUpcoming: () => api.get('movie/upcoming'),
  getNowPlaying: () => api.get('movie/now_playing'),
  searchMovies: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
