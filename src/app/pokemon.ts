export class Pokemon {
    id: number = 0;
    name: string = '';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export const pokemonList: Pokemon[] = [
    new Pokemon(1, 'Bulbasaur'),
    new Pokemon(2, 'Ivysaur'),
    new Pokemon(3, 'Venusaur'),
    new Pokemon(4, 'Charmander'),
    new Pokemon(5, 'Charmeleon'),
    new Pokemon(6, 'Charizard'),
    new Pokemon(7, 'Squirtle'),
    new Pokemon(8, 'Wartortle'),
    new Pokemon(9, 'Blastoise'),
    new Pokemon(10, 'Caterpie'),
];
