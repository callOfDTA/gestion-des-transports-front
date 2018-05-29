import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { ListerAnnonceComponent } from './lister-annonce/lister-annonce.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ReservationPipe, HistoriquePipe } from './filter/historique.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { CreerCovoiturageComponent } from './creer-covoiturage/creer-covoiturage.component';
import { ReserverCovoiturageComponent } from './reserver-covoiturage/reserver-covoiturage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './services/reservation.service';
import { DatePipe } from './filter/date.pipe';
import { AdressePipe } from './filter/adresse.pipe';

const appRoutes: Routes = [
  { path: 'collaborateur/reservations', component: ListerAnnonceComponent },
  { path: 'collaborateur/propositions/creer', component: ReserverCovoiturageComponent },
  { path: 'collaborateur/statistiques', component: StatistiqueComponent },
  { path: 'collaborateur/annonces', component:AnnoncesComponent },
  { path: 'collaborateur/annonces/creer', component:CreerCovoiturageComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListerAnnonceComponent,
    CourseDialogComponent,
    ReservationPipe,
    HistoriquePipe,
    MenuComponent,
    InfoUserComponent,
    AnnoncesComponent,
    StatistiqueComponent,
    CreerCovoiturageComponent,
    ReserverCovoiturageComponent,
    DatePipe,
    AdressePipe
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent],
  entryComponents:[CourseDialogComponent]
})
export class AppModule { }
