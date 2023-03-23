import {MovieListItemType} from "../../types/movieListItemType";
import "./MovieListItem.css";
import React from "react";

interface MovieListItemProps extends MovieListItemType {
    onHoverHandler: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export default function MovieListItem({
                                          Title: title,
                                          Year: year,
                                          Poster: poster,
                                          imdbID,
                                          onHoverHandler,
                                      }: MovieListItemProps) {


    return (
        // <Route key={key} path={`/movies/${imdbID}`} element={<Movie imdbID={imdbID} />}>
        <div className="movie" onMouseOver={onHoverHandler}>
            <img src={poster} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{year}</p>
            </div>
        </div>
        // </Route>
    )
}