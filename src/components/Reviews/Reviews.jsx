import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/api';

import { Loader } from 'components/Loader';
import NoImage from 'images/noImage.png';
import { AuthorImg, AuthorWrapper, List } from './Reviews.styed';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsById = async () => {
      try {
        setLoading(true);
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getReviewsById();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <h2>
          {error}
          <p>Unable to open the page. Please try again later. 😢</p>
        </h2>
      )}
      <List>
        {reviews.map(({ id, author_details, author, content }) => (
          <li key={id}>
            <AuthorWrapper>
              <AuthorImg
                src={
                  author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
                    : NoImage
                }
                alt={author}
              />
              <div>
                <h4>Author: </h4>
                <h5>{author}</h5>
              </div>
            </AuthorWrapper>

            <p>{content}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Reviews;
