import React from "react"
import { Link } from "react-router-dom";
import '../styles/scss/components/_header.scss'

const Header: React.FC = () => {
    return(
        <header>
        <Link to="/" className="titlePage"> <h2>World Peas</h2> </Link>

        <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Newstand</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">My profile</a></li>
            <li><a href="#">Basket</a></li>
        </ul>
    </header>
    );
}

export default Header