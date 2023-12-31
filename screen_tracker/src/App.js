import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import Home from './views/Home';
import Favorites from './views/Favorites';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movies" element={<MoviesList />} />
                <Route path="/movie/:id" element={<MovieDetails />} />  
                
            </Routes>
        </Router>
    );
}

export default App;
