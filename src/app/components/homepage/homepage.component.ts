import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { Tiles } from '../../data/types';
import { TileDataService } from '../../data/services/tile-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  tiles: Tiles;

  constructor(private tileDataService: TileDataService) { }

  ngOnInit(): void {
    this.tiles = this.tileDataService.getTiles();
  }

}
