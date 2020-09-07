import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() alt: string;
  @Input() route: string;

  constructor() { }

  ngOnInit(): void {
  }

  routeToPage(route: string) {

  }

}
