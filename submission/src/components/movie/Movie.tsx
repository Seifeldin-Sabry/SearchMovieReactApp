import {useEffect} from "react";

interface MovieProps {
    imdbID: string
}

export default function Movie({imdbID}: MovieProps) {


    useEffect(() => {
        (async function fetchMovie() {
            const response = await fetch(`https://www.omdbapi.com/?apikey=d37dede0&i=${imdbID}`);
            const data = await response.json();
            console.log(data)
        })()
    }, [])

    return (
        <div>
            <h1>{imdbID}</h1>
        </div>
    )
}