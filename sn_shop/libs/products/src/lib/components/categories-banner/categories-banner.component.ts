import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../models/category';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'lib-products-categories-banner',
  templateUrl: './categories-banner.component.html',
  styleUrls: ['./categories-banner.component.css']
})
export class CategoriesBannerComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  endSubs$ = new Subject<void>();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}
