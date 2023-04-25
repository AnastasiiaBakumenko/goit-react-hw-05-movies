import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Back } from './MovieDetails.styled';
import { MovieDetailsCard } from 'components/MovieDetailCard/MovieDetailCard';
import { getMovieDetails } from 'servises/Api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovieDetails(res.data));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/';

  return (
    <>
     
        <Back to={backLink}> ← Go back</Back>
        <MovieDetailsCard movie={movieDetails} />
      
        <Back to={'cast'} state={{ from: backLink }}>
          Cast
        </Back>
        <Back to={'reviews'} state={{ from: backLink }}>
          Reviews
        </Back>
      
      <Outlet />
     
    </>
  );
};

export default MovieDetails;