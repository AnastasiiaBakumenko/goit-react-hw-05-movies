import { useLocation } from "react-router-dom";
import { Title, StyledLink, Ul, Li, Div} from "./MoviesList.styled";

export const MoviesList = ({title, movies}) =>{
    const location = useLocation();

    return(
        <>
            {title && <Title>{title}</Title>}
            <Ul>
                {movies.map(movie => {
                    return(
                        <Li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
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
