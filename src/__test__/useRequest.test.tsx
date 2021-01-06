import 'jsdom-global/register';
import { testHook } from './testUtil';
import useRequest from '../hooks/useRequest';

describe('useRequest', () => {
    let requestHandler;

    beforeEach(() => {
        testHook(() => {
            requestHandler = useRequest('search');
        });
    });

    it('should have a correct data', () => {
        expect(requestHandler[0]).toStrictEqual([]);
    });

    it('should have correct loading data', () => {
        expect(requestHandler[1]).toBe(false);
    });

    it('should have correct error data', () => {
        expect(requestHandler[2]).toBe(false);
    });

    it('should have a fetchFunction', () => {
        expect(requestHandler[3]).toBeInstanceOf(Function);
    });
});
