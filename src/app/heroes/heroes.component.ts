import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({ //decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes', //'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
