import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard';
import { Loader } from 'components/Loader';

const MovieDetailsComponent = ({ movie, backLink }) => {
  return (
    <>
      <MovieCard film={movie} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsComponent;

MovieDetailsComponent.propTypes = {
  movie: PropTypes.any.isRequired,
  backLink: PropTypes.object.isRequired,
};
