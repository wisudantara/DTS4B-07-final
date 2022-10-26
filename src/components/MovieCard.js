import React from "react";

const MovieCard = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"
    const poster = "not_found.jpg"
    return (
        <div className={"movie-card"} onClick={() => selectMovie(movie)}>
            {movie.poster_path ? <img className={"movie-cover"} src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/>
                :
                
            <div className="movie-placeholder">No Image Found</div>
            // <div className="movie-placeholder"><img  src='/images/not_found.jpg' alt=""/></div>
            } 
            <h5 className={"movie-title"}>{movie.title}</h5>
        </div>
    );
};

export default MovieCard;