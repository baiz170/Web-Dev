import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';

import { Home } from './app/home/home';
import { About } from './app/about/about';
import { Albums } from './app/albums/albums';
import { AlbumDetail } from './app/album-detail/album-detail';
import { AlbumPhotos } from './app/album-photos/album-photos';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'albums', component: Albums },
      { path: 'albums/:id', component: AlbumDetail },
      { path: 'albums/:id/photos', component: AlbumPhotos },
      { path: 'test-photos', component: AlbumPhotos },
      { path: '**', redirectTo: '/home' },
    ]),
  ]
});