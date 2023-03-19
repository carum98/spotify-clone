import { IPlaylist } from './playlist.d';
import { Track } from './track';

export class Playlist implements IPlaylist {
    id: string;
    name: string;
    description: string;
    image: string;
    tracks: Track[];
    
    constructor(data: any) {
        this.id = data['id'];
        this.name = data['name'];
        this.description = data['description'];
        this.image = data['images'][0]['url'];
        this.tracks = data['tracks']['items']?.map((item: any) => new Track(item)) as Track[] || [];
    }
}