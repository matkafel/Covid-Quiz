import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import StartPage from './StratPage';
import Quiz from './Quiz';
import history from './history';
import Counter from './counter/Counter'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/quiz" component={Quiz} />
                    <Route path="/counter" component={Counter} />
                </Switch>
            </Router>
        )
    }
}