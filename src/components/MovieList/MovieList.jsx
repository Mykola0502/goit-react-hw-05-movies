import { useLocation } from 'react-router-dom';
import { Item, StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <Item key={movie.id}>
          <StyledLink to={`/movie/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </Item>
      ))}
    </ul>
  );
};
