import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results'

const pair = ['Trainspotting', '29 Days Later'];

const routes = <Route component={App}>
                  <Route path="/" component={Voting} />
                  <Route path="/results" component={Results} />
               </Route>;


ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);