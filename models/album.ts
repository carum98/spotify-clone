import { IAlbum } from './album.d';
import { Track } from './track';

export class Album implements IAlbum {
    id: string;
    name: string;
    image: string;
    artists_name: string;
    tracks_count: number;
    release_date: string;
    tracks: Track[];

    constructor(data: any) {
        this.id = data['id'];
        this.name = data['name'];
        this.image = data['images'].at(-1)['url'];
        this.artists_name = data['artists'].map((artist: any) => artist.name).join(', ');
        this.tracks_count = data['total_tracks'];
        this.release_date = data['release_date'];
        this.tracks = data['tracks']?.items?.map((item: any) => new Track(item)) as Track[] || [];
    }
}