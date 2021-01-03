interface primaryArtist {
    id: number;
}

interface result {
    title: string;
    header_image_thumbnail_url: string;
    primary_artist: primaryArtist;
}

export interface searchResult {
    result: result;
}
