import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable()
export class HeroManagerService {

  constructor() { }

  createHeroes = (): Hero[] => [
    {
      id: 0,
      name: 'Zero',
      health: 15,
      attack: 10,
      defense: 10,
    },
    {
      id: 1,
      name: 'One',
      health: 15,
      attack: 10,
      defense: 10,
    },
    {
      id: 2,
      name: 'Two',
      health: 15,
      attack: 10,
      defense: 10,
    },
  ];
}
