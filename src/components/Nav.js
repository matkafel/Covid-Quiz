import React from 'react';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="nav">
            <li><Link to="/" className="covid-link">Covid 19</Link></li>

            <ul className="list">
                <li><Link to="/counter" className="nav-item">Counter</Link></li>
                <li><Link to="/quiz" className="nav-item">Quiz</Link></li>
            </ul>
        </div>
    )
}

export default Nav;