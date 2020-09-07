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
    let rows: Tile[] = _.flatMap(this.tiles.rows);
    rows = _.filter(rows, x => {
      return x.adeventureType === adeventureType;
    });
    return rows;
  }
}
