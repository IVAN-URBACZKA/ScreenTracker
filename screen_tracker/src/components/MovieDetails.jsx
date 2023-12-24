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
            setMovie(data);
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p><strong>Description:</strong> {movie.overview}</p>
            <p><strong>Date de sortie:</strong> {movie.release_date}</p>
            <p><strong>Note moyenne:</strong> {movie.vote_average} / 10</p>
            <p><strong>Nombre de votes:</strong> {movie.vote_count}</p>
            {/* Vous pouvez ajouter plus de détails ici si disponibles */}
        </div>
    );
};

export default MovieDetails;
