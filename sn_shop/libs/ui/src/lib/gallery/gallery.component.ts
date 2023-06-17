import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() images: any;
  @Input() image: any;

  selectedImageUrl!: string;

  ngOnInit(): void {
    if (this.hasImages) {
      this.selectedImageUrl = this.image;
    }
  }

  changeSelectedImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  get hasImages() {
    return this.images?.length > 0;
  }
}
