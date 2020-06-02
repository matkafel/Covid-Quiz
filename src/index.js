import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/StratPage';
import Quiz from './components/Quiz';
import history from './components/history';
import Counter from './components/counter/Counter'

const Routing = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/quiz" exact component={Quiz} />
      <Route path="/counter" exact component={Counter} />
    </Switch>
  </Router>

)

ReactDOM.render(
  Routing
  ,
  document.getElementById('root')
);

