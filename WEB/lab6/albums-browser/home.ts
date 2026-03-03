import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Welcome to Album Browser</h1>
    <button (click)="browseAlbums()">Browse Albums</button>
  `,
  styles: [`
    :host {
      display: block;
      text-align: center;
      padding: 4rem 1rem;
      background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
      min-height: 80vh;
    }
    h1 {
      font-size: 3.5rem;
      color: #1e40af;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }
    button {
      background: #6366f1;
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.25rem;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
    }
    button:hover {
      background: #4f46e5;
      transform: translateY(-3px);
      box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.4);
    }
  `]
})
export class Home {
  constructor(private router: Router) {}

  browseAlbums() {
    console.log('Clicked!');
    this.router.navigate(['/albums']);
  }
}