import { Album } from './album';
import { Artist } from './artist';

export interface ITrack {
    id: string;
    name: string;
    preview: string;
    duration: number;
    artist: Artist;
    album: Album?;
    added_at: string?;
}