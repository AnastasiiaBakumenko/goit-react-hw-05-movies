import { useEffect, useState } from "react";
import { getTrending } from "servises/Api";
import { MoviesList } from "components/MovieItems/MoviesList";
import { HomeTitle } from './Home.styled';

const Home = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    getTrending().then(response => setMovies(response.data.results));
},[]);

return(
    <>
    <HomeTitle>Trending Today</HomeTitle>
    <MoviesList movies={movies}/>
    </>
)
}

export default Home;
