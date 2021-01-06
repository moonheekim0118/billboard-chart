import 'jsdom-global/register';
import React from 'react';
import Pagination from '../components/Pagination';
import { mount } from 'enzyme';

describe('<Pagination/>', () => {
    let container = null;
    const mockFn = jest.fn();

    it('renders correctly', () => {
        container = mount(<Pagination nowPage={5} paginate={mockFn} />);
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('has correct number of Pages ', () => {
        expect(container.find('#page').hostNodes()).toHaveLength(7);
    });

    it('should call onClick if Container is clicked', () => {
        container.find('#page').first().simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
