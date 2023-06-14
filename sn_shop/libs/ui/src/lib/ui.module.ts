import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    UiComponent,
    BannerComponent,
    GalleryComponent
  ],
  imports: [RouterModule, CommonModule
  ],
  exports: [
    UiComponent,
    BannerComponent,
    GalleryComponent
  ]
})
export class UiModule { }
