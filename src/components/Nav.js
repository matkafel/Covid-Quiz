import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <li><Link to="/" className="covid-link">Covid 19</Link></li>

            <ul className="list">
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/counter" className="nav-item">Counter</Link></li>
                <li><Link to="/quiz" className="nav-item">Quiz</Link></li>
            </ul>
        </div>
    )
}

export default Nav;