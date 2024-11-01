import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeIdService {

    private idSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    setId(newId: number): void {
        this.idSubject.next(newId); // Émet une nouvelle valeur d'id
    }

    getId(): Observable<number> {
        return this.idSubject.asObservable(); // Renvoie un Observable pour s'abonner aux changements d'id
    }
}
