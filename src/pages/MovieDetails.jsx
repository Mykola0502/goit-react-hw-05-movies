import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovie } from 'services/api';
import { BackLink } from 'components/BackLink';
import { Loader } from 'components/Loader';
import MovieDetailsComponent from 'components/MovieDetailsComponent';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoading(true);
        const movie = await fetchMovie(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {loading && <Loader />}
      {error && (
        <h2>
          {error}
          <p>
            Something went wrong, try reloading the page or come back later😢
          </p>
        </h2>
      )}
      {!error && !loading && movie && (
        <MovieDetailsComponent movie={movie} backLink={backLinkHref} />
      )}
    </main>
  );
};

export default MovieDetails;
