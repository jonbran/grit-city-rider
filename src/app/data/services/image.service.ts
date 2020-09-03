import { Injectable } from '@angular/core';
import { ImageData, ImageValues, ImageDescription } from '../types';
import * as _ from 'lodash';
import * as imageData from '../post-images.json';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageData: ImageData = (imageData as any).default;

  constructor() { }

  getImageDataForPost(id: number): ImageValues {
    const me = this;
    // for some reason the id is getting converted to a string. Convert it back to a number.
    id = +id;

    const images: ImageValues = _.find(me.imageData.posts, x => {
      console.log(x.id === id);
      return x.id === id;
    }

    );
    return images;
  }
}
