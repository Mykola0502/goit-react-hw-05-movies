import { Link } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard';

const MovieDetailsComponent = ({ movie, backLink }) => {
  //   const location = useLocation();
  //   console.log(location.state);

  const { backLinkHref } = backLink;

  return (
    <>
      <MovieCard film={movie} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsComponent;

// // <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
// // <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>
