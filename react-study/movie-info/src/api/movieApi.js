import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const keyQuery = 'api_key=10923b261ba94d897ac6b81148314a3f';

export const movieApi = {
  getMovie: (id) =>
    api.get(`movie/${id}?${keyQuery}`, {
      params: { append_to_response: 'videos' },
    }),
  getPopular: (page = 1) =>
    api.get(`movie/popular?${keyQuery}&page=${page}`).then((r) => {
      return r.data;
    }),
  getUpcoming: (page = 1) =>
    api.get(`movie/upcoming?${keyQuery}&page=${page}`).then((r) => {
      return r.data;
    }),
  getNowPlaying: () => api.get(`movie/now_playing?${keyQuery}`),
  searchMovies: (term) =>
    api.get(`search/movie?${keyQuery}`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
