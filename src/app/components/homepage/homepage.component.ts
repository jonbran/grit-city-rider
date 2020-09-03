import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { Tiles } from '../../data/types';
import * as tiles from '../../data/tiles.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  tiles: Tiles = (tiles as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tiles);
  }

}
