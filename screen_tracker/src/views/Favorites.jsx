import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Header, Footer } from '../components';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
            const favoriteMovies = [];

            for (const id of favoriteIds) {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=55b2ede0aaf742708c6b67e287f72d75`);
                    if (!response.ok) {
                        throw new Error(`Erreur HTTP ! statut: ${response.status}`);
                    }
                    const movieData = await response.json();
                    favoriteMovies.push(movieData);
                } catch (error) {
                    console.error('Erreur lors de la récupération des données du film:', error);
                }
            }

            setFavorites(favoriteMovies);
        };

        fetchFavoriteMovies();
    }, []);

    return (
        <div>
             <Header />
        <div className="movies-list">
        <div className="cards-container">
        {favorites.length > 0 ? (
            favorites.map(movie => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.overview}
                    imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            ))
        ) : (
            <p>Aucun film en favoris.</p>
        )}
    </div>
    </div>
    <Footer />
    </div>
);
    
};

export default Favorites;
