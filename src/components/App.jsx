import React, { Suspense } from "react";
import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));
const AbautPage = React.lazy(() => import("../pages/AbautPage/AbautPage"));
const ReservePage = React.lazy(() =>
  import("../pages/ReservePage/ReservePage")
);
const ContactsPage = React.lazy(() =>
  import("../pages/ContactsPage/ContactsPage")
);
const PersonalPage = React.lazy(() =>
  import("../pages/PersonalPage/PersonalPage")
);

const NotFoundPage = React.lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage")
);

// const  = React.lazy(() => import("../pages/HomePage/HomePage"));
const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>...</p>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/abaut" element={<AbautPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/personal" element={<PersonalPage />} />

          <Route path="*" element={<NotFoundPage />} />
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
