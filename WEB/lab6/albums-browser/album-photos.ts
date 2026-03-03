import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <div *ngIf="loading">Loading photos...</div>
    <div class="grid" *ngIf="!loading">
      <div class="photo" *ngFor="let photo of photos">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
    <button (click)="goBack()">Back</button>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; }
    .photo {
  position: relative;
  overflow: hidden;
}
.photo img {
  transition: transform 0.3s;
}
.photo:hover img {
  transform: scale(1.1);
}
.photo p {
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  color: #333;
}
  `]
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  
    this.albumId = Number(this.route.snapshot.paramMap.get('id')); 
  
    this.loading = true;
  
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data: Photo[]) => {   
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();  
      },
      error: (err) => {
        console.error('Photos ERROR:', err);  
        this.loading = false;
      },
      complete: () => console.log('Photos observable completed')
    });
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}