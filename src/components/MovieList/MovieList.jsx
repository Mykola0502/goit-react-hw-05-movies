import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { Item, StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <Item key={movie.id}>
          <StyledLink to={`/movie/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.original_title}
          </StyledLink>
        </Item>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_title: PropTypes.string,
    })
  ).isRequired,
};
