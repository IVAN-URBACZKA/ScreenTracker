import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
               
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                <li><Link to="/favorites">Favoris</Link></li>
                
                </ul>
            </nav>
        </header>
    );
};

export default Header;

