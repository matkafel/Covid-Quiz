import React from "react";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../style/StartPage.css'

const Home = () => {
    return (
        <>
            <Nav />
            <div className="wrapper">
                <div className="Home">
                    <div className="text">
                        <h1>Covid - 19 Quiz</h1>
                        <p>Check if you have symptoms of coronavirus</p>

                    </div>
                    <form>
                        <Link to="/quiz" className="btnStart">Start</Link>
                    </form>
                </div>
                <div className="picture"></div>
            </div>
        </>
    );
}

export default Home;