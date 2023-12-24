import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link ici
import '../assets/css/MovieCard.css'; 

const MovieCard = ({ id, title, description, imageUrl }) => { // Ajouter id dans les props
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="movie-card">
            <Link to={`/movie/${id}`}> {/* Utiliser l'id ici */}
                <img src={imageUrl} alt={title} className="movie-image" />
                <h3>{title}</h3>
            </Link>
            <div className="movie-info">
                <p>{description}</p>
                <button className="favorite-btn" onClick={toggleFavorite}>
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
