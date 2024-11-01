export class PokemonDetail {
    id: number = 0;
    name: string = '';
    height: number = 0;
    types: string[] = [];
    weight: number = 0;
    sprites: { front_default: string, front_shiny: string };

    constructor(id: number, name: string, height: number, types: string[], weight: number, sprites: { front_default: string, front_shiny: string }) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.types = types;
        this.weight = weight;
        this.sprites = sprites;
    }
}