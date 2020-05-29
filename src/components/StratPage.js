import React, { Component } from "react";
import history from './history';
import Nav from './Nav';
import '../style/StartPage.css'


export default class Home extends Component {
    render() {
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
                            <button class="btnStart" onClick={() => history.push('/quiz')}>Start</button>
                        </form>
                    </div>
                    <div className="picture"></div>
                </div>
            </>
        );
    }
}