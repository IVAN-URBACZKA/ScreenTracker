import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../assets/css/MovieList.css'; 


const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=55b2ede0aaf742708c6b67e287f72d75&language=en-US&page=1`);
            const data = await response.json();
            console.log(data)
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movies-list">
            <div className="cards-container">
            {movies.map(movie => (
                <MovieCard 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                description={movie.description} 
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            />            
            ))}
            </div>
        </div>
    );
};

export default MoviesList;
