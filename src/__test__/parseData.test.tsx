import 'jsdom-global/register';
import { dataParser } from '../util/dataParser';

describe('data Parser', () => {
    it('data Parser works correctly', () => {
        const result = {
            api_path: 'test',
            id: 1,
            title: 'test',
            song_art_image_thumbnail_url: 'test',
            primary_artist: { id: 1, name: 'test' },
        };

        const data = [{ result }];

        expect(dataParser(data)).toStrictEqual([result]);
    });
});
