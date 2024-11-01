import { Component } from '@angular/core';
import { PokeServiceService } from '../poke-service.service';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../pokemon-detail';
import { PokeIdService } from '../poke-id.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {

    pokemonDetails: PokemonDetail | undefined;    

    constructor(private pokeService: PokeServiceService, private pokeIdService : PokeIdService) { }

    ngOnInit(): void {
        this.pokeIdService.getId().subscribe((newId) => {
            this.setPokemonDetails(newId); // Met à jour l'id dans le composant à chaque émission
          });
    }

    setPokemonDetails(id: number): void {
        if (id != 0) {
            this.pokeService.getPokemonDetails(id).subscribe((data: PokemonDetail) => {
                this.pokemonDetails = data;
            });
        }
    }




}
