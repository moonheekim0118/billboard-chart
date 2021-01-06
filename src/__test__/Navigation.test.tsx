import 'jsdom-global/register';
import React from 'react';
import Navigation from '../components/Navigation';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<Navigation/>', () => {
    let container = null;

    it('renders correctly', () => {
        container = mount(
            <HashRouter>
                <Navigation />
            </HashRouter>
        );
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});
