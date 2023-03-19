import { ICategory } from './category.d';

export class Category implements ICategory {
    id: string;
    name: string;
    image: string;

    constructor(data: any) {
        this.id = data['id'];
        this.name = data['name'];
        this.image = data['icons'][0]['url'];
    }
}