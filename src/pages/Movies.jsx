import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import { Loader } from 'components/Loader';

import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleFormSubmit = search => {
    setSearchParams({ query: search });
  };

  useEffect(() => {
    setNotFound(null);
    setMovies([]);
    const searchMovies = async query => {
      if (!query) {
        return;
      }

      try {
        setLoading(true);
        const movies = await fetchSearchMovie(query);
        if (movies.length === 0) {
          setNotFound('Nothing was found for your request');
          return;
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    searchMovies(movieName);
  }, [movieName]);

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {error && (
        <h2>
          {error}
          <p>Unable to open the page. Please try again later. 😢</p>
        </h2>
      )}

      {!loading && movies && <MovieList movies={movies} />}
      {!loading && movies && notFound && <h3>{notFound}</h3>}
    </main>
  );
};

export default Movies;
