import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';
import { Home, About, Artist } from './pages';

class App extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/artist/:id" component={Artist} />
                </HashRouter>
            </Suspense>
        );
    }
}

export default hot(module)(App);
