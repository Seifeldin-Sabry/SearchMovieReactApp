import React from "react";
import "./MovieSearchBar.css";

interface MovieSearchBarProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export default function MovieSearchBar({onChangeHandler, value}: MovieSearchBarProps) {
    return (
        <div className="movie-search-bar">
            <label htmlFor="search">Search</label>
            <input type={'search'} value={value} onChange={onChangeHandler} />
        </div>
    )
}