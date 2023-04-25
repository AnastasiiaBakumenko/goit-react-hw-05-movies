import { Title, StyledLink, Ul, Li, Div} from "./MoviesList.styled";
// import { useLocation } from "react-router-dom";

export const MoviesList = ({title, movies, goBack}) =>{
    // const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    // const location = useLocation();

    return(
        <>
            {title && <Title>{title}</Title>}
            <Ul>
                {movies.map(movie => {
                    return(
                        <Li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: goBack}}>
                                {/* <Img src={movie.poster_path ? (`https://www.themoviedb.org/t/p/original/${movie.poster_path}`): ("https://i.ibb.co/z703XMd/film-plug.png")} alt={movie.title}></Img> */}
                                <Div>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.release_date}</p>
                                </Div>
                            </StyledLink>
                        </Li>
                    )
                })}
            </Ul>
        </>
    );

};
