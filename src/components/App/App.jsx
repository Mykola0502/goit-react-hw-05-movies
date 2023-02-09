import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import NotFound from 'pages/NotFound';
// import MovieDetails from 'pages/MovieDetails';

// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';

// import { Container } from './App.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};
