import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const controller = new AbortController();

export const fetchTrending = async () => {
  try {
    const response = await axios.get('trending/movie/day', {
      params: {
        api_key: '9e9058c72b8ee0828aa8b191435a8696',
        // signal: controller.signal,
      },
    });
    return response.data;
  } catch (error) {
    // throw new Error(error.message);
    console.log(error);
  }
};

// controller.abort();

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
    // console.log(error);
    // return error;
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

// export const fetchPictures = async (query, page) => {
//   try {
//     const response = await axios.get('', {
//       params: {
//         key: '31583377-fa4c6976355a1f179c9a11dc6',
//         q: query,
//         page: page,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 12,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// https://api.themoviedb.org/3/trending/movie/day?api_key=9e9058c72b8ee0828aa8b191435a8696