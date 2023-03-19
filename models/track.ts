import { ITrack } from './track.d';
import { Album } from './album';
import { Artist } from './artist';

export class Track implements ITrack {
    id: string;
    name: string;
    preview: string;
    duration: number;
    artist: Artist;
    album: Album | null;
    added_at: string | null;

    constructor(data: any) {
        const track = data['track'] || data;

        this.id = track['id'];
        this.name = track['name'];
        this.preview = track['preview_url'];
        this.duration = track['duration_ms'];
        this.artist = new Artist(track['artists'][0]);
        this.album = track['album'] ? new Album(track['album']) : null;
        this.added_at = data['added_at'] || null;
    }
}