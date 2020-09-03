export interface Tiles {
    rows: [[Tile]];
}

export interface Tile {
    id: number;
    title: string;
    alt: string;
    image: string;
    route: string;
}

export interface ImageData {
    posts: ImageValues[];
}

export interface ImageValues {
    id: number;
    images: ImageDescription[];
}

export interface ImageDescription {
    sort: number;
    source: string;
    alt: string;
}

