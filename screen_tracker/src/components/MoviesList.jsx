import React, { useState, useEffect, useRef, useCallback } from 'react';
import MovieCard from './MovieCard';


const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const observer = useRef();

    const lastMovieElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && movies.length) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [movies]);

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=55b2ede0aaf742708c6b67e287f72d75&language=en-US&page=${page}`);
        const data = await response.json();
        setMovies(prevMovies => [...prevMovies, ...data.results]);
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return (
        <div className="movies-list">
            <div className="cards-container">
            {movies.map((movie, index) => {
                if (movies.length === index + 1) {
                    return <div ref={lastMovieElementRef} key={movie.id}><MovieCard id={movie.id} title={movie.title} description={movie.description} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></div>;
                } else {
                    return <MovieCard key={movie.id} id={movie.id} title={movie.title} description={movie.description} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />;
                }
            })}
            </div>
        </div>
    );
};

export default MoviesList;
