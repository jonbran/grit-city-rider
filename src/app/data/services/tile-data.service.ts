import { Injectable } from '@angular/core';
import { Tile, Tiles } from '../types';
import * as _ from 'lodash';
import * as tiles from '../tiles.json';

@Injectable({
  providedIn: 'root'
})
export class TileDataService {

  tiles: Tiles = (tiles as any).default;

  constructor() { }

  getTiles(): Tiles {
    return this.tiles;
  }

  getAllTiles(): Tile[] {
    return _.flatMap(this.tiles.rows);
  }

  getTilesOfAdventureType(adeventureType: number): Tile[] {
    const adventureTiles: Tile[] = _.flatMap(this.tiles.rows).filter(x => x.adeventureType === adeventureType);
    return adventureTiles;
  }
}
