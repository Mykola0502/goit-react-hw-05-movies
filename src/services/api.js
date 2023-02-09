import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  try {
    const response = await axios.get('trending/movie/day', {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async id => {
  try {
    const response = await axios.get(`movie/${id}`, {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSearchMovie = async query => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
        language: 'en-US',
        query: `${query}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchMovieCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
        language: 'en-US',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`, {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
