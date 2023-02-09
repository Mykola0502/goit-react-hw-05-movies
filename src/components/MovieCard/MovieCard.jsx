import PropTypes from 'prop-types';

import NoImage from 'images/noImage.png';
// import { useLocation } from 'react-router-dom';

import { CardImg, CardInfo, CardWrapper } from './MovieCard.styled';

export const MovieCard = ({ film }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;

  // console.log(typeof vote_average);

  const getMovieGenres = genres => genres.map(genre => genre.name).join(', ');

  //   console.log(film);
  //   const location = useLocation();

  //   console.log(location.state);

  return (
    <CardWrapper>
      <CardImg
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : NoImage
        }
        alt={original_title}
      />
      <CardInfo>
        <h2>
          {original_title} ({release_date})
        </h2>
        <p>User score: {(vote_average && vote_average.toFixed(1)) || '-'}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && getMovieGenres(genres)}</p>
      </CardInfo>
    </CardWrapper>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
};

// import NoImage from 'images/noImage.png';

// import { CardImg, CardInfo, CardWrapper } from './MovieCard.styled';

// export const MovieCard = ({ film }) => {
//   const {
//     poster_path,
//     original_title,
//     release_date,
//     vote_average,
//     overview,
//     genres,
//   } = film;

//   //   console.log(genres);

//   const getMovieGenres = genres => genres.map(genre => genre.name).join(', ');

//   //   console.log(film);

//   return (
//     <CardWrapper>
//       <CardImg
//         src={
//           poster_path
//             ? `https://image.tmdb.org/t/p/w500${poster_path}`
//             : NoImage
//         }
//         alt={original_title}
//       />
//       <CardInfo>
//         <h2>
//           {original_title} ({release_date})
//         </h2>
//         <p>User score: {(vote_average && vote_average.toFixed(1)) || '-'}</p>
//         <h3>Overview</h3>
//         <p>{overview}</p>
//         <h3>Genres</h3>
//         <p>{genres && getMovieGenres(genres)}</p>
//       </CardInfo>
//     </CardWrapper>
//   );
// };
