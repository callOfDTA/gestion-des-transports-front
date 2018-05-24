import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReserverCovoiturageComponent } from './reserver-covoiturage/reserver-covoiturage.component';


@NgModule({
  declarations: [
    AppComponent, 
    ReserverCovoiturageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
