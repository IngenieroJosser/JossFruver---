import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/scss/components/_header.scss';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <Link to="/" className="titlePage"> 
                <h2>World Peas</h2> 
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Newstand</a></li>
                <li><a href="#">Who we are</a></li>
                <li><a href="#">My profile</a></li>
                <li><a href="#">Basket</a></li>
            </ul>

            {isOpen && <div className="modal-overlay" onClick={toggleMenu}></div>}
        </header>
    );
};

export default Header;
