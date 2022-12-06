import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { RsaComponent } from './components/rsa/rsa.component';
import { RsaService } from './services/rsa.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsaComponent
  ],
  imports: [
   BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule, FormsModule,
   
  ],
 
  providers: [RsaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
