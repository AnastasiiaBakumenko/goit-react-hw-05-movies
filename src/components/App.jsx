import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import  Header  from './Header/Header';

import Home from 'pages/Home/Home';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route element={<Header />} path="/">
            <Route index element={<Home />} />
            <Route element={<Movies />} path="movies" />
            <Route element={<MovieDetails />} path="movies/:movieId">
              <Route element={<Cast />} path="cast" />
              <Route element={<Reviews />} path="reviews" />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};