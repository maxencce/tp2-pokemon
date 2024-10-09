import { Component } from '@angular/core';
import { Pokemon, pokemonList } from '../pokemon';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    id: string = '';
    pokeList: Pokemon[] = pokemonList;
    selectedPokemonId: number = 0;

    getPokemonName(): string {
        let pokemon = this.pokeList.find(pokemon => pokemon.id == this.selectedPokemonId);
        return pokemon ? pokemon.name : "No pokemon found";
    }
}
