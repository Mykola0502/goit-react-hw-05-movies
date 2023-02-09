import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard';
import { Loader } from 'components/Loader';

const MovieDetailsComponent = ({ movie, backLink }) => {
  //   const location = useLocation();

  // const { backLinkHref } = backLinkHref;
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';

  console.log(location.state);

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

// // <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
// // <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>
