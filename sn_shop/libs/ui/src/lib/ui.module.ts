import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';

import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UiComponent,
    BannerComponent,
    GalleryComponent
  ],
  imports: [RouterModule, CommonModule, ButtonModule
  ],
  exports: [
    UiComponent,
    BannerComponent,
    GalleryComponent
  ]
})
export class UiModule { }
