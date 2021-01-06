import 'jsdom-global/register';
import { pathParser } from '../util/pathParser';

describe('pathParser', () => {
    it('pathParser works correctly', () => {
        const path = 'test/artist';
        const removing = 'test/';
        expect(pathParser(path, removing)).toBe('artist');
    });
});
