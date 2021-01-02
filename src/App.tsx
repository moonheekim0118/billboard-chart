import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';
import { Home, About } from './pages';

class App extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </HashRouter>
            </Suspense>
        );
    }
}

export default hot(module)(App);
