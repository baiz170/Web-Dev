import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="loading">Loading albums...</div>
    <ul *ngIf="!loading">
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.id }} - {{ album.title }}</a>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    :host {
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      background: white;
      margin: 1rem 0;
      padding: 1.25rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    li:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.15);
    }
    a {
      color: #1d4ed8;
      text-decoration: none;
      font-weight: 500;
      flex: 1;
    }
    a:hover {
      color: #1e40af;
      text-decoration: underline;
    }
    button {
      background: #ef4444;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #dc2626;
    }
  `]
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => { 
        this.albums = data; 
        this.loading = false; 
        this.cdr.detectChanges();   
      },
      error: (err) => { 
        console.error('Error fetching albums', err);
        this.loading = false; 
        this.cdr.detectChanges();   
      }
    });
  }

  
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();   
    });
  }
}