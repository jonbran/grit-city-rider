import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../data/services/image.service';
import { ImageData, ImageValues, ImageDescription } from '../../data/types';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit {

  @Input() postId: number;

  private images: ImageDescription[];
  // public
  currentImage: { index: number, image: ImageDescription };


  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImageValues();
  }

  nextImage() {
    if (!this.currentImage) {
      this.currentImage = this.images[0] && { index: 0, image: this.images[0] } || undefined;
    } else {
      const nextIndex = this.currentImage.index + 1;
      this.currentImage = this.images[nextIndex] && { index: nextIndex, image: this.images[nextIndex] } || this.currentImage;
    }
  }

  prevImage() {
    if (!this.currentImage) {
      this.currentImage = this.images[0] && { index: 0, image: this.images[0] } || undefined;
    } else {
      const prevIndex = this.currentImage.index - 1;
      this.currentImage = this.images[prevIndex] && { index: prevIndex, image: this.images[prevIndex] } || this.currentImage;
    }
  }

  private loadImageValues() {
    const postImages: ImageValues = this.imageService.getImageDataForPost(this.postId);
    this.images = postImages.images;
    this.nextImage();
  }


}
