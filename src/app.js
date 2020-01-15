import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './views/landingPage';
import Tutorial from './views/tutorial';


const App = () => <Router>
    <div>
    <Route exact path='/' component={LandingPage} />
    <Route path='/tutorial' component={Tutorial} />
    </div>
    </Router>;

export default App;
