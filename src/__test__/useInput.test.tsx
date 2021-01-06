import 'jsdom-global/register';
import { act } from 'react-dom/test-utils';
import { testHook } from './testUtil';
import useInput from '../hooks/useInput';

// [value handler validation setter]

describe('useInput', () => {
    let inputHandler;
    beforeEach(() => {
        testHook(() => {
            inputHandler = useInput('test');
        });
    });

    it('should have a correct value', () => {
        expect(inputHandler[0]).toBe('test');
    });

    it('should have a handler function', () => {
        expect(inputHandler[1]).toBeInstanceOf(Function);
    });

    it('should have a vaildation', () => {
        expect(inputHandler[2]).toBe(false);
    });

    it('should have an setter function', () => {
        expect(inputHandler[3]).toBeInstanceOf(Function);
    });

    it('should update value when handler is called', () => {
        act(() => {
            inputHandler[1]({ target: { value: 'test!' } });
        });
        expect(inputHandler[0]).toBe('test!');
    });

    it('should update value when setter is called', () => {
        act(() => {
            inputHandler[3]('test again!');
        });
        expect(inputHandler[0]).toBe('test again!');
    });

    it('should update Validation when value is empty', () => {
        act(() => {
            inputHandler[3]('');
        });
        expect(inputHandler[2]).toBe(true);
    });
});
