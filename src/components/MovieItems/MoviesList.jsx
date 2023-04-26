import { Title, StyledLink, Ul, Li, Div} from "./MoviesList.styled";

export const MoviesList = ({title, movies, goBack}) =>{

    return(
        <>
            {title && <Title>{title}</Title>}
            <Ul>
                {movies.map(movie => {
                    return(
                        <Li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: goBack}}>
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
