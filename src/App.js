import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3'
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();




function App() {
  return (
    <div className="firstPage">
        <h2>Registration Form</h2>
        <Router history={history}>
            <Route path="/" component={Page1} exact />
            <Route path="/Page2" component={Page2} exact />
            <Route path="/Page3" component={Page3} exact />
        </Router>
    </div>
  );
}

export default App;
