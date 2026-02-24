import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">

      <div class="image-container">
        <button class="nav left" (click)="prevImage()">❮</button>

        <a [href]="product.link" target="_blank">
          <img [src]="product.images[currentImage]" alt="{{product.name}}">
        </a>

        <button class="nav right" (click)="nextImage()">❯</button>
      </div>

      <h3 class="product-title">{{ product.name }}</h3>

      <p class="description">{{product.description}}</p>

      <p class="price">{{product.price | number}} ₸</p>

      <div class="likes">
         ❤️ {{ product.likes }}
      </div>  

      <div class="rating">
        <span *ngFor="let star of fullStars">⭐</span>
        <span *ngFor="let star of emptyStars">☆</span>
        <span class="rating-number">{{product.rating}}</span>
      </div>
      
      <div class="buttons">
        <button (click)="like()">Like</button>
        <button class="delete-btn" (click)="remove()">Delete</button>
        <button (click)="shareWhatsApp()">WhatsApp</button>
        <button (click)="shareTelegram()">Telegram</button>
      </div>

    </div>
  `,
  styles: [`
    .likes {
      margin-bottom: 10px;
      font-size: 14px;
      color: #e60023;
    }

    .product-title {
      font-size: 18px;
      font-weight: 600;
      margin: 10px 0;
      height: 48px;              
      overflow: hidden;          
      display: -webkit-box;
      -webkit-line-clamp: 2;     
      -webkit-box-orient: vertical;
}

    .card {
      border: 1px solid #e5e5e5;
      border-radius: 18px;
      padding: 20px;
      background: #fff;
      box-shadow: 0 8px 18px rgba(0,0,0,0.08);
      transition: 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.12);
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 220px;
      overflow: hidden;
      border-radius: 12px;
      margin-bottom: 15px;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .image-container:hover img {
      transform: scale(1.05);
    }

    .nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: none;
      background: rgba(0,0,0,0.6);
      color: white;
      cursor: pointer;
      z-index: 2;

      display: flex;              
      align-items: center;        
      justify-content: center;    
  
      padding: 0;
      font-size: 20px;
    }

    .left { left: 10px; }
    .right { right: 10px; }

    .nav:hover {
      background: rgba(0,0,0,0.8);
    }

    h3 {
      font-size: 18px;
      margin: 10px 0;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
      color: #555;
      min-height: 60px;
    }

    .price {
      font-weight: bold;
      margin: 12px 0;
      font-size: 1.4rem;
      color: #e60023;
    }

    .rating {
      margin-bottom: 15px;
      font-size: 15px;
    }

    .rating-number {
      margin-left: 6px;
      color: #555;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: auto;
    }

    button {
      flex: 1 1 calc(50% - 10px);
      padding: 10px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-weight: 500;
      background-color: #1976d2;
      color: white;
      transition: 0.2s;
    }

    .buttons button:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }

    .delete-btn {
      background-color: #d32f2f;
    }

    .delete-btn:hover {
      background-color: #9a0007;
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteEvent = new EventEmitter<number>();

  currentImage = 0;

  like() { this.product.likes++; }
  remove() { this.deleteEvent.emit(this.product.id); }

  shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  shareTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.product.images.length) % this.product.images.length;
  }

  get fullStars(): any[] {
    return Array(Math.round(this.product.rating));
  }

  get emptyStars(): any[] {
    return Array(5 - Math.round(this.product.rating));
  }
}