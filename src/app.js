import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './views/landingPage';
import Tutorial from './views/tutorial';
import RandomQuiz from './views/tutorial/randomTutorial'


const App = () => <Router>
    <div>
    <Route exact path='/' component={LandingPage} />
    <Route path='/tutorial' component={Tutorial} />
    <Route path='/randomtests' component={RandomQuiz} />
    </div>
    </Router>;

export default App;
