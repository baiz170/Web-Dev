import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ProductItemComponent } from './product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div *ngIf="products.length === 0">
      <p>No products in this category</p>
    </div>

    <div class="grid" *ngIf="products.length > 0">
      <app-product-item *ngFor="let product of products"
                        [product]="product"
                        (deleteEvent)="deleteProduct($event)">
      </app-product-item>
    </div>
  `,styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 15px; 
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  constructor(private service: ProductService) {}

  deleteProduct(id: number) {
    this.service.deleteProduct(id); 
    this.products = this.products.filter(p => p.id !== id); 
  }
}
