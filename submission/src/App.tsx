import './App.css'
import MovieSearchBar from "./components/movie-search/MovieSearchBar";
import {useState} from "react";

function App() {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="App">
            <MovieSearchBar onChangeHandler={onChangeHandler} />
        </div>
    )
}

export default App
