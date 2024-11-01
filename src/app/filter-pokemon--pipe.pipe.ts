import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {
  transform(pokeList: Pokemon[], searchText: string): Pokemon[] {
    if (!pokeList || !searchText) {
      return pokeList;
    }
    return pokeList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}