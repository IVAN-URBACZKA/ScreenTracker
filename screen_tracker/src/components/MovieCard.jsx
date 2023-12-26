import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/MovieCard.css';

const MovieCard = ({ id, title, description, imageUrl }) => {
    // Vérifie si le film est déjà dans les favoris lors du montage du composant
    const [isFavorite, setIsFavorite] = useState(
        JSON.parse(localStorage.getItem('favorites') || '[]').includes(id)
    );

    const toggleFavorite = () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);
        
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (newFavoriteStatus) {
            favorites.push(id); // Ajoute l'ID du film aux favoris
        } else {
            favorites = favorites.filter(favId => favId !== id); // Retire l'ID du film des favoris
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    useEffect(() => {
        // Mettre à jour l'état isFavorite si les favoris dans le LocalStorage changent
        const handleStorageChange = () => {
            setIsFavorite(JSON.parse(localStorage.getItem('favorites') || '[]').includes(id));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [id]);

    return (
        <div className="movie-card">
        <Link to={`/movie/${id}`}> {/* Utiliser l'id ici */}
            <img src={imageUrl} alt={title} className="movie-image" />
            
        </Link>
        <div className="movie-info">
          <h3>{title}</h3>
            <p>{description}</p>
            <button className="favorite-btn" onClick={toggleFavorite}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    </div>
);
};

export default MovieCard;
