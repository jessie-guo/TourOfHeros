import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({ //decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes', //'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroes$: Observable<Hero[]> = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {
  } //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

  ngOnInit(): void {
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //subscribe: asyncronous approach, function(heros) { return this.heroes = heroes }
  }

}
