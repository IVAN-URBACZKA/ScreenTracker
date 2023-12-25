import React, { useState, useEffect } from 'react';
import '../assets/css/MovieDetails.css'; 
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=55b2ede0aaf742708c6b67e287f72d75`);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-container">
            <div className="movie-header" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
                <h1>{movie.title}</h1>
            </div>
            <div className="movie-details">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <p className="movie-overview">{movie.overview}</p>
                    <div className="movie-meta">
                        <span>Budget: ${movie.budget}</span>
                        <span>Revenue: ${movie.revenue}</span>
                        <span>Runtime: {movie.runtime} minutes</span>
                    </div>
                    <div className="movie-genres">
                        {movie.genres && movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
                    </div>
                    <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="movie-link">Official Website</a>
                    <button className="trailer-button">Watch Trailer</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
