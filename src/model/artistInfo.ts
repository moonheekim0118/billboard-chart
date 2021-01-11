import { searchResult } from './searchResult';

export interface artistSongFullInfo {
    next_page: number;
    songs: searchResult[];
}
