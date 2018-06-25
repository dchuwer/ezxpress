import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  NewCustomer = new Customer();
  customers
  currentCustomer: Customer = new Customer();


  public singleCustomerObservable: Observable<Customer>;
  private singleCustomerSubject: Subject<Customer> = new Subject<Customer>();

  constructor(private mapService: MapService, private http: HttpClient) {
    this.singleCustomerObservable = this.singleCustomerSubject.asObservable();
  }

  getCustomers()  {
    this.http.get<Customer>('customersApi/').subscribe(data => {
    this.customers = data;
     })
  }

  getCustomer(id) {
    this.http.get<Customer>('customersApi/' + id).subscribe(data => {
      this.currentCustomer = data[0];
      this.singleCustomerSubject.next(data[0])
      console.log(this.currentCustomer)
      console.log("a")
     })
  }

  addNewClient(newClient : Customer){
    this.http.post<Customer>('customersApi/add',newClient).subscribe(data => {
      this.currentCustomer = data[0];
      this.singleCustomerSubject.next(data[0])
      console.log(newClient)
      console.log("a")
     })
    
  }

  // shareLiveLocation(id) {
  //   this.singleCustomerObservable.subscribe(()=>{
  //     setInterval(this.getMotoCurrentLocation(),5000);
  //   })
  //   this.getMoto(id);
  // }

  

  // putMotoLocation(currentCustomer) {
  //   console.log("d")
  //   let id = currentCustomer.motoboyId
  //   this.http.put<Customer>('motoboysApi/update/' + id, { motoboy: currentCustomer }).subscribe((data) => {
  //     //update motoboys array
  //     this.currentCustomer = data;
  //     this.singleCustomerSubject.next(data);
     
  //   })
  // }

// getMotoCurrentLocation(){
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       this.currentCustomer.latitude = position.coords.latitude;
//       this.currentCustomer.longitude = position.coords.longitude;
//       this.reverseAddress(this.currentCustomer.latitude, this.currentCustomer.longitude);
//       this.putMotoLocation(this.currentCustomer)

//     })
//   }    
// }

  // checkGoogleAddress(localAddress) {
  //   var geocoder: google.maps.Geocoder = new google.maps.Geocoder;
  //   console.log(localAddress)
  //   geocoder.geocode({ address: localAddress }, (results) => {
  //     this.currentCustomer.latitude = Number(results[0].geometry.location.lat);
  //     this.currentCustomer.longitude = Number(results[0].geometry.location.lat);
  //     console.log(this.currentCustomer.latitude)
  //   })
  // }

  reverseAddress(lat, lng) {
    this.mapService.reverseAddress(lat, lng);
  }

}
