import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; //Angular's HttpClient methods return RxJS Observables
import { MessageService } from './message.service'; //service-in-service

@Injectable({
  providedIn: 'root' //single shared instance and injects into class that asks for it
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  }

  constructor(private messageService: MessageService) { }
}
