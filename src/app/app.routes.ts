import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
{path: '' , component: HomeComponent},
{path: 'about' , component: AboutComponent},
{path: 'services' , component: ServicesComponent},
{path: 'gallery' , component: GalleryComponent},
];
