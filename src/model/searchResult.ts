interface primaryArtist {
    id: number;
    name: string;
}

export interface searchResult {
    api_path: string;
    id: number;
    title: string;
    song_art_image_thumbnail_url: string;
    primary_artist: primaryArtist;
}

export interface initResult {
    result: searchResult;
}
