import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../customer.service';
import { MotoService } from './../moto.service';
import { Customer } from './../customer';

@Component({
  selector: 'app-statusconnection',
  templateUrl: './statusconnection.component.html',
  styleUrls: ['./statusconnection.component.css']
})
export class StatusconnectionComponent implements OnInit {

  firstName: string;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private motoService: MotoService) { 
    this.customerService.singleCustomerObservable.subscribe((newCustomer) => {
      this.customer = newCustomer;
      console.log(this.customer.firstName);
    });
  }

  ngOnInit() {
    this.customerService.singleCustomerObservable.subscribe((newCustomer) => {
      this.customer = newCustomer;
      console.log(this.customer.firstName);
    });
  }

}
