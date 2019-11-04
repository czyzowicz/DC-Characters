import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Batman', group: 'Heroes' },
      { id: 2, name: 'Superman', group: 'Heroes' },
      { id: 3, name: 'Robin', group: 'Heroes' },
      { id: 4, name: 'Joker', group: 'Villains' },
      { id: 5, name: 'Two Faces', group: 'Villains' },
      { id: 6, name: 'Ras al Ghul', group: 'Villains' },
      { id: 7, name: 'Catwomen', group: 'Villains' },
      { id: 8, name: 'Flash', group: 'Heroes' },
      { id: 9, name: 'Green Lantern', group: 'Heroes' },
      { id: 10, name: 'Wonder Woman', group: 'Heroes' },
      { id: 11, name: 'Nightwing', group: 'Heroes' },
      { id: 12, name: 'Aquaman', group: 'Heroes' },
      { id: 13, name: 'Martian Manhunter', group: 'Heroes' },
      { id: 14, name: 'The Penguin', group: 'Villains' },
      { id: 15, name: 'Lex Luthor', group: 'Villains' },
      { id: 16, name: 'Harley Quinn', group: 'Villains' },
      { id: 17, name: 'Bane', group: 'Villains' },
      { id: 18, name: 'John Constantine', group: 'Heroes' },
      { id: 19, name: 'Cyborg', group: 'Heroes' },
      { id: 20, name: 'Darkseid', group: 'Villains' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty, the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
