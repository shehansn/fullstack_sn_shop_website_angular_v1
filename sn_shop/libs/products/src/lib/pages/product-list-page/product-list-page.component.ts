import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage!: boolean;

  constructor(
    private prodService: ProductsService,
    private catService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['categoryid'] ? this._getProducts([params['categoryid']]) : this._getProducts();
      params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
      console.log('params[categoryid]', params['categoryid'])
    });
    this._getCategories();
  }

  private _getProducts(categoriesFilter?: any) {
    this.prodService.getProducts(categoriesFilter).subscribe((resProducts) => {
      this.products = resProducts;
    });
  }

  private _getCategories() {
    this.catService.getCategories().subscribe((resCats) => {
      this.categories = resCats;
    });
  }

  categoryFilter() {
    console.log('categoryFilter clicked')
    const selectedCategories: any = this.categories
      .filter((category) => category['checked'])
      .map((category) => category.id);

    this._getProducts(selectedCategories);
    console.log('categoryFilter selectedCategories', selectedCategories)

  }
}
