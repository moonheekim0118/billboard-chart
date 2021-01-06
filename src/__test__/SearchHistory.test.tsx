import 'jsdom-global/register';
import React from 'react';
import SearchHistory from '../components/SearchHistory';
import { mount } from 'enzyme';

describe('<SearchHistory/>', () => {
    let container = null;
    let MockOnClcik = jest.fn();
    let MockOnRemove = jest.fn();

    let MockData = [
        { value: 'test', id: 1 },
        { value: 'test2', id: 2 },
    ];

    it('renders correctly', () => {
        container = mount(
            <SearchHistory
                data={MockData}
                onClick={MockOnClcik}
                onRemove={MockOnRemove}
            />
        );
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should call onClick if element is clicked', () => {
        container.find('#search-history').first().simulate('click');
        expect(MockOnClcik).toHaveBeenCalled();
    });

    it('should call onRemove if button is clicked', () => {
        container.find('#remove-btn').first().simulate('click');
        expect(MockOnRemove).toHaveBeenCalled();
    });
});
