import 'jsdom-global/register';
import React from 'react';
import Card from '../components/Card';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<Card/>', () => {
    let container = null;
    const mockData = {
        api_path: 'sample',
        id: 1,
        title: 'sample',
        song_art_image_thumbnail_url: 'sample',
        primary_artist: {
            id: 1,
            name: 'sample',
        },
    };

    it('renders correctly', () => {
        container = mount(
            <HashRouter>
                <Card data={mockData} search={true} />
            </HashRouter>
        );
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});
