import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent } //This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes.
];

@NgModule({ //metadata initializes the router and starts it listening for browser location changes
  imports: [RouterModule.forRoot(routes)], //adds the RouterModule to the AppRoutingModule imports array and configures it with the routes
  exports: [RouterModule] // RouterModule will be available throughout the app
})
export class AppRoutingModule { }
