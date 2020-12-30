import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

class App extends Component {
    render() {
        return <Test>얍얍</Test>;
    }
}

const Test = styled.div`
    color: red;
`;

export default hot(module)(App);
