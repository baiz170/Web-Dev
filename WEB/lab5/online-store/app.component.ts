import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { Category } from './category.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  template: `
    <div class="container">
      <h2>Select a category</h2>
      <select [(ngModel)]="selectedCategoryId" (change)="onCategoryChange()">
        <option [ngValue]="null" disabled>Select category</option>
        <option *ngFor="let cat of categories" [value]="cat.id">{{cat.name}}</option>
      </select>

      <div *ngIf="selectedCategoryId">
        <app-product-list [products]="filteredProducts"></app-product-list>
      </div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    select {
      padding: 10px 15px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      margin: 15px 0 30px 0;
      cursor: pointer;
      outline: none;
      transition: all 0.2s;
    }

    select:hover {
      border-color: #1976d2;
      box-shadow: 0 0 5px rgba(25, 118, 210, 0.5);
    }
  `]
})
export class AppComponent {
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private service: ProductService) {
    this.categories = service.getCategories();
  }

  onCategoryChange() {
    this.filteredProducts = this.service.getProductsByCategory(Number(this.selectedCategoryId));
  }
}