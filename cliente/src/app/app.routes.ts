import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RsaComponent } from './components/rsa/rsa.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent }, 
  {path:'rsa',component:RsaComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, 
];