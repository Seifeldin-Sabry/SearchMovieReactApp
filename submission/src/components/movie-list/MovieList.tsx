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
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {movies.map((movie) => (
                <>
                    {/*<Route key={movie.imdbID} path={`/movie/${movie.imdbID}`}*/}
                    {/*       element={<Movie imdbID={movie.imdbID} />}*/}
                    {/*/>*/}
                    <MovieListItem key={movie.imdbID} {...movie} onHoverHandler={onHoverHandler} />
                </>
            ))}
            {/*</Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    )
}