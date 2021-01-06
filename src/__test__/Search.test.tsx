import 'jsdom-global/register';
import React from 'react';
import Button from '../components/Button';
import Search from '../components/Search';
import { mount } from 'enzyme';

describe('<Search/>', () => {
    let container = null;
    let mockFn = jest.fn();

    it('renders correctly', () => {
        container = mount(<Search fetchAPI={mockFn} keyword={''} />);
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('Button should be disabled', () => {
        const submitButton = container.find(Button).first();
        expect(submitButton.prop('disabled')).toBeTruthy();
    });
});
