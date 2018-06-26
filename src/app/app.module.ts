import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
 


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


@NgModule({
  declarations: [
    AppComponent,
    AddMotoboyComponent,
    MapComponent,
    NewclientComponent,
    HomeComponent,
    DeliveryComponent,
    DestinationComponent,
    MaprouteComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g',
      libraries: ["places"]
    }),
    MatToolbarModule,
    FlexLayoutModule,
    GooglePlaceModule,
    Ng4GeoautocompleteModule.forRoot()
    
  ],
  providers: [EzxpressService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
