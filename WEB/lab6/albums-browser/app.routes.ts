import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Albums } from './albums';
import { AlbumDetail } from './album-detail';
import { AlbumPhotos} from './album-photos';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }