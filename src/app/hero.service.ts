import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, timer } from 'rxjs'; //Angular's HttpClient methods return RxJS Observables
import { MessageService } from './message.service'; //service-in-service
import { mapTo } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //single shared instance and injects into class that asks for it
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    //return of(HEROES); // returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    // return timer(4000).pipe(mapTo(HEROES)); // timer is type of observable, adds lag :)
  }

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> { //asynchronous signature. It returns a mock hero as an Observable, using the RxJS of() function
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) { //takes a type parameter so it can return the safe value as the type that the app expects
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
