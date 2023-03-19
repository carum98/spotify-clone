import { Track } from './track';

export interface IPlaylist {
    id: string;
    name: string;
    description: string;
    image: string;
    tracks: Track[];
}