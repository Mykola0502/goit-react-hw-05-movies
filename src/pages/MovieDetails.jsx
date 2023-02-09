import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovie } from 'services/api';
import { BackLink } from 'components/BackLink';
import { Loader } from 'components/Loader';
// import { MovieCard } from 'components/MovieCard';
import MovieDetailsComponent from 'components/MovieDetailsComponent';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  //   console.log(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // console.log(backLinkHref);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoading(true);
        const movie = await fetchMovie(movieId);
        setMovie(movie);
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

    getMovieById(movieId);

    //   return () => {
    //     second
    //   }
  }, [movieId]);

  // console.log(location.state);

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

// <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
// <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>

// import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import { fetchMovie } from 'services/api';
// import { BackLink } from 'components/BackLink';
// import { Loader } from 'components/Loader';
// import { MovieCard } from 'components/MovieCard';

// const MovieDetails = () => {
//   const [movie, setMovie] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { movieId } = useParams();
//   //   console.log(movieId);
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/';

//   useEffect(() => {
//     const getMovieById = async () => {
//       try {
//         setLoading(true);
//         const movie = await fetchMovie(movieId);
//         setMovie(movie);
//         // console.log(movie);
//       } catch (error) {
//         // console.log(error.message);
//         console.log(error);

//         setError(error.message);
//         // setError('No films found, try again😢');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMovieById(movieId);

//     //   return () => {
//     //     second
//     //   }
//   }, [movieId]);

//   return (
//     <main>
//       <BackLink to={backLinkHref}>Go back</BackLink>
//       {loading && <Loader />}
//       {error && (
//         <h2>
//           {error}
//           <p>
//             Something went wrong, try reloading the page or come back later😢
//           </p>
//         </h2>
//       )}
//       {!error && !loading && movie && (
//         <>
//           <MovieCard film={movie} />
//           <div>
//             <h4>Additional information</h4>
//             <ul>
//               <li>
//                 <Link to="cast">Cast</Link>
//               </li>
//               <li>
//                 <Link to="reviews">Reviews</Link>
//               </li>
//             </ul>
//             <Outlet />
//           </div>
//         </>
//       )}
//     </main>
//   );
// };

// export default MovieDetails;

// // <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
// // <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>
