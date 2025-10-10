import { Route, Routes } from "react-router-dom";
import { MovieDetails, MoviesList, PageNotFound, Search } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList title="Your Guide to Great Movies" apiPath="movie/now_playing" />} />
      <Route path="movies/popular" element={<MoviesList title="Popular Movies" apiPath="movie/popular" />} />
      <Route path="movies/top" element={<MoviesList title="Top Rated Movies" apiPath="movie/top_rated" />} />
      <Route path="movies/upcoming" element={<MoviesList title="Upcoming Movies" apiPath="movie/upcoming" />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
