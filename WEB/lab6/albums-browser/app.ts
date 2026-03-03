import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
 
styles: [`
  nav {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    padding: 1rem 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-right: 2rem;
    transition: color 0.2s, transform 0.2s;
  }
  nav a:hover {
    color: #fde047;
    transform: translateY(-2px);
  }
  nav a.active {
    color: #fde047;
    border-bottom: 3px solid #fde047;
    padding-bottom: 4px;
  }
`]
})
export class App { }