import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/products';
@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    FormsModule,
    TitleCasePipe,
    RouterLink
  ],
  templateUrl: './collections.html',
  styleUrl: './collections.css'
})
export class CollectionComponent {

  products: any[] = [];

  filteredProducts: any[] = [];

  searchText = '';

  selectedCategory = 'all';

  selectedPrice = 'all';

  selectedSort = 'default';

  constructor(private productService: ProductService) {

    this.products = this.productService.getProducts();

    this.filteredProducts = [...this.products];

  }

  applyFilters() {

    let result = [...this.products];

    // Search
    if (this.searchText.trim()) {

      result = result.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase())
      );

    }

    // Category
    if (this.selectedCategory !== 'all') {

      result = result.filter(product =>
        product.category === this.selectedCategory
      );

    }

    // Price
    switch (this.selectedPrice) {

      case 'under350':
        result = result.filter(product => product.price < 350);
        break;

      case '350to400':
        result = result.filter(product =>
          product.price >= 350 && product.price <= 400
        );
        break;

      case 'over400':
        result = result.filter(product => product.price > 400);
        break;

    }

    // Sort
    switch (this.selectedSort) {

      case 'low':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'high':
        result.sort((a, b) => b.price - a.price);
        break;

      default:
        result.sort((a, b) => a.id - b.id);

    }

    this.filteredProducts = result;

  }

  resetFilters() {

    this.searchText = '';

    this.selectedCategory = 'all';

    this.selectedPrice = 'all';

    this.selectedSort = 'default';

    this.filteredProducts = [...this.products];

  }

  get totalProducts() {

    return this.filteredProducts.length;

  }

}
