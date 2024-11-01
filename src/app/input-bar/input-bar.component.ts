import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeServiceService } from '../poke-service.service';
import { PokeIdService } from '../poke-id.service';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css'],
})
export class InputBarComponent {
    pokeSearched: string = '';
    pokeList: Pokemon[] = [];
    selectedPokemonId: number = 1;

    constructor(private pokeService : PokeServiceService, private pokeIdService : PokeIdService) {
    }

      // Quand la valeur du select change, j'appelle la fonction getPokemonDetails() du composant PokemonDetailsComponent

    ngOnInit(): void {
        this.pokeService.getPokemonList().subscribe((data: Pokemon[]) => {
            this.pokeList = data;
        });
    }

    getSelectedPokemonName(): string {
        let pokemon = this.pokeList.find(pokemon => pokemon.id == this.selectedPokemonId);
        return pokemon ? pokemon.name : "No pokemon found";
    }

    displayPokemonSelected(): void {
        console.log("id:" + this.selectedPokemonId + " name:" + this.getSelectedPokemonName());
    }

    changeSelectedId() {
        this.pokeIdService.setId(this.selectedPokemonId);
    }
}