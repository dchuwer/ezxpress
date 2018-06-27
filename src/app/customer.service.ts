import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  newCustomer = new Customer();
  customers
  currentCustomer: Customer = new Customer();
  firstName: string;

  public connectedUserUpdated : Observable<string>;
  private connectedUserSubject: Subject<string>;
  public singleCustomerObservable: Observable<Customer>;
  private singleCustomerSubject: Subject<Customer> = new Subject<Customer>();

  constructor(private mapService: MapService, private http: HttpClient) {
    this.singleCustomerObservable = this.singleCustomerSubject.asObservable();
    this.connectedUserSubject = new Subject<string>();
    this.connectedUserUpdated = this.connectedUserSubject.asObservable();
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

  findCustomer(emailValue, passwordValue) {
    let data = {email: emailValue, password: passwordValue};
    this.http.get<Customer>('customersApi/', {params: data}).subscribe(data => {
      this.currentCustomer = data[0];
      this.singleCustomerSubject.next(data[0])
      console.log(this.currentCustomer)
     })
  }

  updateUserConnectionStatus(customer) {
    this.currentCustomer = customer;
    this.singleCustomerSubject.next(this.currentCustomer);
  }

  getUserConnected() {
    return this.currentCustomer;
  }

  addNewClient(newClient : Customer){
    this.http.post<Customer>('customersApi/add',newClient).subscribe(data => {
      this.currentCustomer = data[0];
      this.singleCustomerSubject.next(data[0])
      console.log(newClient)
      console.log("a")
     })
    
  }

  deleteCustomer(currentCustomer) {
    console.log("inside delete")
    let id = currentCustomer.customerId
    currentCustomer.active =false ;
    this.http.put<Customer>('customersApi/delete/' + id, { customer: currentCustomer }).subscribe((data) => {
      //update motoboys array
      this.currentCustomer = data;
      this.singleCustomerSubject.next(data);
     
    })
  }

  reverseAddress(lat, lng) {
    this.mapService.reverseAddress(lat, lng);
  }

}
