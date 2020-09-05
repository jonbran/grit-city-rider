import { Injectable } from '@angular/core';
import { AdeventureType } from '../types';
import * as _ from 'lodash';
import * as adeventureTypes from '../adeventure-types.json';

@Injectable({
  providedIn: 'root'
})
export class AdeventureTypeService {

  adeventureTypes: AdeventureType[] = (adeventureTypes as any).default;

  constructor() { }

  getAdeventureTypes(): AdeventureType[] {
    return this.adeventureTypes;
  }

  getAdeventureType(id: number): AdeventureType {
    const adeventure = _.find(this.adeventureTypes, x => x.id === id);
    return adeventure;
  }
}
