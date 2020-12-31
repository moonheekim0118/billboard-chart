import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';
import { Home, findChart } from './pages';

class App extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/findChart" component={findChart} />
                </HashRouter>
            </Suspense>
        );
    }
}

export default hot(module)(App);
