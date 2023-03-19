export interface IAlbum {
    id: string;
    name: string;
    image: string;
    artists_name: string;
    tracks_count: number;
    release_date: string; 
    tracks: Track[];
}