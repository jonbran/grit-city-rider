import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileComponent } from '../tile/tile.component';
import { Tiles, Tile } from '../../data/types';
import { TileDataService } from '../../data/services/tile-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  tiles: Tile[];

  constructor(private route: ActivatedRoute, private tileDataService: TileDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const typeId = params.typeId;
      if (typeId) { this.tiles = this.tileDataService.getTilesOfAdventureType(+typeId); }
      else {
        this.tiles = this.tileDataService.getAllTiles();
      }
    });
  }

}
