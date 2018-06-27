import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerService } from './../customer.service';
import { MotoService } from './../moto.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    hide = true;
    categories = [
      {value: 1, viewValue: 'customer'},
      {value: 2, viewValue: 'motoboy'}
    ];
    userName: string = '';
    password: string = '';
    categoryValue: number;
    customer: Customer;

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    matcher = new MyErrorStateMatcher();

    constructor(private customerService: CustomerService, private motoService: MotoService, private route : ActivatedRoute, private router : Router) { }

    submitLogin() {
      console.log("userName: " + this.userName + ", password: " + this.password + ", category: " + this.categoryValue);
      if (this.categoryValue == 1) /* Customer*/ {
        this.customerService.findCustomer(this.userName, this.password);
        debugger;
        if (this.customerService.currentCustomer) {
          console.log(this.customerService.currentCustomer.firstName);
          this.customerService.currentCustomer.active = true;
          
          this.customerService.updateUserConnectionStatus(this.customerService.currentCustomer);
          this.customerService.singleCustomerObservable.subscribe(() => {
            this.customer = this.customerService.currentCustomer;
          })
          console.log(this.customerService.currentCustomer.firstName);
        }
      } else /* MotoBoy */ {
        this.motoService.findMotoBoy(this.userName, this.password);
        if (this.motoService.currentMotoBoy) {
          this.motoService.currentMotoBoy.active = true;
          console.log(this.motoService.currentMotoBoy);
        }
      }
      this.router.navigate(['/']);
    }

    ngOnInit() {
    }

}
