import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero; //removed @input that recieves the hero object and displays it

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void { // (+) operator converts the string to a number
    const id = +this.route.snapshot.paramMap.get('id'); //route.snapshot is a static image of the route information shortly after the component was created
    this.heroService.getHero(id) // dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // backward one step in the browser's history stack using the Location service, currently saves
  }

  save(): void {
    this.heroService.getHero(this.hero.id) //used get rather than update, two way binding saves the name
      .subscribe(() => this.goBack());
  }

}
