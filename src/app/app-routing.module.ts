import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewclientComponent } from './newclient/newclient.component';
import { AddMotoboyComponent } from './add-motoboy/add-motoboy.component'
import { DeliveryComponent } from './delivery/delivery.component'
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-customer', component: NewclientComponent },
  { path: 'add-motoboy', component: AddMotoboyComponent },
  { path: 'add-delivery', component: DeliveryComponent },
  { path: 'orders', component: TableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
