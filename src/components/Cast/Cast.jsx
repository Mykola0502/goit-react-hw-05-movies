import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/api';

import NoImage from 'images/noImage.png';
import { Character, CharacterTitle, Item, List, Name } from './Cast.styled';
import { Loader } from 'components/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastById = async () => {
      try {
        setLoading(true);
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCastById();
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
      {cast && (
        <List>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <Item key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : NoImage
                }
                alt={name}
              />
              <Name>{name}</Name>
              <Character>
                <CharacterTitle>Character:</CharacterTitle> {character}
              </Character>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
