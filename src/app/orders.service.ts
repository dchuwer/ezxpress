import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  formData: any = new FormData();
  allOrders: Array<Order> = [];
  allOrdersSubject: Subject<Order[]> = new Subject<Order[]>();
  allOrdersObservable: Observable<Order[]>;

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) {
    this.allOrdersObservable = this.allOrdersSubject.asObservable();
    this.getAllOrders()
   }

   private OrdersServiceUrl = '/ordersApi'

   getAllOrders(): void {
    this.http.get<Order[]>(this.OrdersServiceUrl).subscribe((orders) => {
      this.allOrders = orders;
      console.log(orders)
      this.allOrdersSubject.next(this.allOrders)
    })
  }
  
  findOrder(order_id) {  
    return this.allOrders.find( order => order.orderId == order_id )
  }
  
  addNewOrder(order){
    console.log("inside Add")
    this.http.post<any>('ordersApi/add',order).subscribe((data) => {
      console.log(data)
      this.allOrders.push(data);
      this.allOrdersSubject.next(this.allOrders)
      //this.getAllOrders();
    })
  }
  // addNewOrder(newOrder: Order): void{
  //   this.http.post<Order>(this.OrdersServiceUrl+'/add',{order: newOrder}).subscribe(() => {
  //    this.allOrders.push(newOrder);
  //   })
  // }

  

  getOrderById(id: number): void{
    this.http.get<Order>(this.OrdersServiceUrl + `/${id}`).subscribe((order) => {
      // this.selectedOrder = order;
      // this.selectedOrderSubject.next(order)
    });
  }

  updateOrder(data, id) {
    console.log(id)
    this.http.put<any>(`ordersApi/update/${id}`, data).subscribe(( data) => {
      
      console.log("order was updated"+ id)
      this.allOrders = data
      this.allOrdersSubject.next(this.allOrders)
      //this.getAllOrders();
    })
  }

  sendSmsToCustomer(order: Order){

    console.log("Send SMS ...")
    //  this.http.post('/send', {
    //   from: 'Acme Inc',
    //   to: order.phoneDestination,
    //   text: 'motoBoy on the way!'
    // }).subscribe((data) => {
    //   console.log(data)
    // })
  }

  updateStatus(order,newStatus, motoBoy) {
      order.motoboyId = motoBoy.motoboyId;
      order.statusId = newStatus;
      console.log(newStatus)
      this.updateOrder(order,order.orderId)
      if(newStatus===2){
        console.log("sending SMS .....")
        //this.sendSmsToCustomer(order)
      }
    
    
  }
  
  cancelAssignToOrder(order) {
    order.motoboy = null;
    order.status = 1;
    //Needs to be define 
    //sendNotificationToclient(order){}
  }

  confirmEmail(order) {
    console.log("send email ........")
    //this.updateOrder(order, order.orderId)
    this.http.post('/sendEmail', order).subscribe((data) => {
      
    //this.http.post('uploadSign', this.formData).subscribe((data) => {
      //update motoboys array?
      //this.currentMotoBoy = data;
    })
    this.snackBar.open("Email Sent to the client", " ", {
      duration: 3000,
    });
    this.router.navigate([''])

  // uploadSignature(signFile) {
  //   console.log(signFile)
  //   let sendFile = {sign: signFile }
  //   let orderId = 1
  //   let signFileName = orderId + 'sign.png'
  //   this.formData.append("uploads", signFile, signFileName);
  //   this.http.post('/sendEmail', sendFile).subscribe((data) => {
  //   //this.http.post('uploadSign', this.formData).subscribe((data) => {
  //     //update motoboys array?
  //     //this.currentMotoBoy = data;
  //   })
        
  }
}