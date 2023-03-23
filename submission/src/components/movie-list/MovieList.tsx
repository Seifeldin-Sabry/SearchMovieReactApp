import {MovieListItemType} from "../../types/movieListItemType";
import MovieListItem from "../movie/MovieListItem";

interface MovieListProps {
    movies: MovieListItemType[]
}

export default function MovieList({movies}: MovieListProps) {

    function onHoverHandler(event: React.MouseEvent<HTMLDivElement>) {
        event.currentTarget.classList.toggle('movie-hover')
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieListItem key={movie.imdbID} {...movie} onHoverHandler={onHoverHandler} />
            ))}
        </div>
    )
}