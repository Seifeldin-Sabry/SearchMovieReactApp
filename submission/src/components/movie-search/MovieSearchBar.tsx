import React from "react";

interface MovieSearchBarProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MovieSearchBar({onChangeHandler}: MovieSearchBarProps) {
    return (
        <div className="movie-search-bar">
            <input type={'search'} onChange={onChangeHandler} />
            <button>Search</button>
        </div>
    )
}