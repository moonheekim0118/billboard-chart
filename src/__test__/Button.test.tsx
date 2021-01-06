import 'jsdom-global/register';
import React from 'react';
import Button from '../components/Button';
import { mount } from 'enzyme';

describe('<Button/>', () => {
    let container = null;
    const mockFn = jest.fn();

    it('renders correctly', () => {
        container = mount(
            <Button
                title={'sample'}
                disabled={false}
                type={'submit'}
                onClick={mockFn}
            />
        );
    });

    it('matches snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should call onClick if Container is clicked', () => {
        container.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
