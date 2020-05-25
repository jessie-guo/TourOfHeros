import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({ //decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes', //'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { } //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

  ngOnInit(): void {
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //subscribe: asyncronous approach function(heros) { return this.heroes = heroes }
  }

}
