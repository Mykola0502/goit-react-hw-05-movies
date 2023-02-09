import { useState, useEffect } from 'react';

import { fetchTrending } from 'services/api';
import { Loader } from 'components/Loader';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMoviesTrending = async () => {
      try {
        setLoading(true);
        const movies = await fetchTrending();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMoviesTrending();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && (
        <h2>
          {error}
          <p>No films found, try again😢</p>
        </h2>
      )}
    </main>
  );
};

export default Home;
