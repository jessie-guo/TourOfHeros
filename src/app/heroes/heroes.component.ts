import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({ //decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes', //'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
