import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Home, About } from './pages';
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <HashRouter>
                    <Link to="about">어바웃</Link>
                    <Layout />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </HashRouter>
            </Suspense>
        );
    }
}

export default hot(module)(App);
