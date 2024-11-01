import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonDetail } from './pokemon-detail';

@Injectable({
    providedIn: 'root'
})
export class PokeServiceService {
    constructor(private http: HttpClient) { }

    getPokemonList(): Observable<Pokemon[]> {
        return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100').pipe(
            map((res: any) => {
                return res.results.map((pokemon: any) => {
                    return new Pokemon(pokemon.url.split('/')[6], pokemon.name);
                });
            })
        );
    }

    getPokemonDetails(id: number): Observable<PokemonDetail> {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
            map((res: any) => {
                return new PokemonDetail(res.id, res.name, res.height, res.types.map((types: any) => types.type.name), res.weight, res.sprites);
            })
        );
    }
}
