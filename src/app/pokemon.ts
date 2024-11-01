export class Pokemon {
    
    id: number = 0;
    name: string = '';
    height: number = 0;
    types: string[] = [];
    weight: number = 0;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}