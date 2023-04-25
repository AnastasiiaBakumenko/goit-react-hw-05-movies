export const MovieDetailsCard = ({movie}) => {
    const {poster_path, title, release_date, vote_average, overview, genres} = movie;

    
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const imgUrl = imgBaseUrl.concat(poster_path);
    const genresList = genres.map(genre => genre.name).join(', ');

    return (
        <>
        <div>
            <img src={imgUrl} alt={title} width = "350"/>
            </div>
            <div>
                <h2>{title} <span>{release_date}</span>
                </h2>
                <p>User score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres:</h3>
                <p>{genresList}</p>
                </div></>
    );
};