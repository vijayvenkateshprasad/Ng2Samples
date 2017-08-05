import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { MyService } from './app.service';
import { Hero } from './hero';

@Component({
  selector: 'my-custom-component',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hr/>
    <my-hero-detail [hero] = 'selectedHero'></my-hero-detail>
  `,
  styleUrls: ['style.css'],
  providers: [MyService]
})
export class sampleNgComponent implements OnInit {
  /**
   *
   */
  constructor(private _heroService: MyService) { }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this._heroService.getData().then(response => this.heroes = response);
  }
}
