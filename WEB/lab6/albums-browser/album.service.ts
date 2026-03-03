import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './models/models';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private updatedAlbums: Record<number, Album> = {};

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<Album> {
    if (this.updatedAlbums[id]) {
      return of(this.updatedAlbums[id]);  
    }
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
      map(response => {
        this.updatedAlbums[album.id] = response;  
        return response;
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}