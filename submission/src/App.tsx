import './App.css'
import MovieSearchBar from "./components/movie-search/MovieSearchBar";
import {useEffect, useState} from "react";
import MovieList from "./components/movie-list/MovieList";

function App() {
    const MIN_SEARCH_LENGTH = 3
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (searchTerm.length < MIN_SEARCH_LENGTH) {
            return;
        }
        (async function fetchMovies() {
            const response = await fetch(`https://www.omdbapi.com/?apikey=d37dede0&s=${searchTerm}`);
            const data = await response.json();
            console.log(data)
            setMovies(data.Search);
        })()
    }, [searchTerm])


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    return (
        <div className="App">
            <MovieSearchBar value={searchTerm} onChangeHandler={onChangeHandler} />
            {movies && <MovieList movies={movies} />
                || <div>No movies found</div>
            }
        </div>
    )
}

export default App
