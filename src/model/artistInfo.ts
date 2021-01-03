export interface artistSongInfo {
    title: string;
    header_image_thumbnail_url: string;
}

export interface artistSongFullInfo {
    next_page: number;
    songs: artistSongInfo[];
}
