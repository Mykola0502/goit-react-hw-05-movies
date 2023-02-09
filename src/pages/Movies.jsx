import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import { Loader } from 'components/Loader';

import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  console.log(movies);
  // console.log(movieName);

  //   const visibleMovies = movies.filter(movie =>
  //     movie.name.toLowerCase().includes(movieName.toLowerCase().trim())
  //   );

  const handleFormSubmit = search => {
    setSearchParams({ query: search });
  };

  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    const searchMovies = async qyery => {
      try {
        setLoading(true);
        const movies = await fetchSearchMovie(qyery);
        setMovies(movies);
        // setSearchParams('');
        // console.log(movies);

        // console.log(movie);
      } catch (error) {
        // console.log(error.message);
        console.log(error);

        setError(error.message);
        // setError('No films found, try again😢');
      } finally {
        setLoading(false);
      }
    };

    searchMovies(movieName);

    // return () => {
    //   setSearchParams('');
    // };
  }, [movieName, setSearchParams]);

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
      {!loading && movies && movies.length === 0 && (
        <h3>Nothing was found for your request</h3>
      )}
      {!loading && movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
