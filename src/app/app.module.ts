import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



import { AppComponent } from './app.component';
import { EzxpressService } from './ezxpress.service';
import { AddMotoboyComponent } from './add-motoboy/add-motoboy.component';
import { MapComponent } from './map/map.component';
import { NewclientComponent } from './newclient/newclient.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MapService } from './map.service';
import { DestinationComponent } from './destination/destination.component';
import { MaprouteComponent } from './maproute/maproute.component';
import { MotoShareLiveLocationComponent } from './moto-share-live-location/moto-share-live-location.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { StatusconnectionComponent } from './statusconnection/statusconnection.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMotoboyComponent,
    MapComponent,
    NewclientComponent,
    HomeComponent,
    DeliveryComponent,
    DestinationComponent,
    MaprouteComponent,
    MotoShareLiveLocationComponent,
    LoginComponent,
    StatusconnectionComponent

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g',
      libraries: ["places"]
    }),
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule   
  ],
  providers: [EzxpressService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
