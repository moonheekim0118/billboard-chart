import 'jsdom-global/register';
import React from 'react';
import Layout from '../components/Layout';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<Layout/>', () => {
    let container = null;

    it('renders correctly', () => {
        container = mount(
            <HashRouter>
                <Layout title={'test'} children={<div>TEST</div>} />
            </HashRouter>
        );
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});
