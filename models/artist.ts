import { IArtist } from './artist.d';

export class Artist implements IArtist {
    id: string;
    name: string;
    image: string | null;
    genres: string[];

    constructor(data: any) {
        this.id =  data['id'];
        this.name = data['name'];
        this.image = data['images'] ? data['images'][0]['url'] : null;
        this.genres = data['genres'];
    }
}