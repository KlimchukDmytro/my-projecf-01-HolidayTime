import React, { Suspense } from "react";
import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));

// const  = React.lazy(() => import("../pages/HomePage/HomePage"));
const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} /> */}
      </Suspense>
    </div>
  );
};

export default App;
