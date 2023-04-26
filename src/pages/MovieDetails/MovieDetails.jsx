import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

import { LI } from './MovieDetails.styled';
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
     
        <LI to={backLink}> ← Go back</LI>
        <MovieDetailsCard movie={movieDetails} />
      <ul>
        <LI to={'cast'} state={{ from: backLink }}>
          Cast
        </LI>
        <LI to={'reviews'} state={{ from: backLink }}>
          Reviews
        </LI>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
     
    </>
  );
};

export default MovieDetails;