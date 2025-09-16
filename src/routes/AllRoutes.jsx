import { Route, Routes } from "react-router-dom";
import { MovieDetails, MoviesList, PageNotFound, Search } from "../pages";


const AllRoutes = () => {
  return (
    <Routes >
        <Route path ="/" element={<MoviesList title="your guide to great movies" apiPath="movie/now_playing" />}/>
        <Route path ="movies/popular" element={<MoviesList title="popular movies" apiPath="movie/popular" />}/>
        <Route path ="movies/top" element={<MoviesList title="top rated  movies" apiPath="movie/top_rated" />}/>
        <Route path ="movies/upcoming" element={<MoviesList title="upcoming movies" apiPath="movie/upcoming" />}/>
        <Route path ="movie/:id" element={<MovieDetails /> } /> 
        <Route path ="search" element={<Search apiPath="search/movie"/> } /> 
        <Route path="*" element={<PageNotFound />} title="page not found" />

        


    </Routes>
  )
}

export default AllRoutes;