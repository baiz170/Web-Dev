import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { Album } from '../models/models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  template: `
  <div *ngIf="album">
      <h2>Album Details</h2>
      <p>ID: {{ album.id }}</p>
      <p>User ID: {{ album.userId }}</p>
      <input [(ngModel)]="titleInput" />
      <button (click)="saveTitle()">Save</button>
      <button (click)="viewPhotos()">View Photos</button>
      <button (click)="goBack()">Back</button>
  </div>
  `,
  styles: [`
    h2 {
      color: #1e40af;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    p {
      font-size: 1.1rem;
      margin: 0.75rem 0;
      color: #374151;
    }
    input {
      width: 100%;
      padding: 0.75rem;
      margin: 1.5rem 0;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 1.1rem;
    }
    input:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    }
    button {
      padding: 0.75rem 1.5rem;
      margin: 0.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    button:nth-child(1) { background: #10b981; color: white; }
    button:nth-child(2) { background: #3b82f6; color: white; }
    button:nth-child(3) { background: #6b7280; color: white; } 
    button:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `]
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  titleInput = '';

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');

      if (!idStr) {
        this.router.navigate(['/albums']);
        return;
      }

      const id = Number(idStr);
      if (isNaN(id)) {
        this.router.navigate(['/albums']);
        return;
      }


      this.albumService.getAlbum(id).subscribe({
        next: (a) => {
          this.album = a;
          this.titleInput = a.title;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.router.navigate(['/albums']);
        }
      });
    });
  }

  saveTitle() {
    if (!this.album) return;
    const updatedAlbum: Album = {
      ...this.album,
      title: this.titleInput
    };
  
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album = response;
        this.titleInput = response.title; 
      },
      error: (err) => {
        console.error('Ошибка сохранения:', err);
        alert('Не удалось сохранить');  
      }
    });
  }

  viewPhotos() {
    if (this.album) this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}