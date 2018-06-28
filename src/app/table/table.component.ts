import { Component, OnInit } from '@angular/core';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userType: string;
  currentMotoBoy: MotoBoy = new MotoBoy();
  orders: Array<Order> = new Array<Order>();
  dataSource = new MatTableDataSource(this.orders);
 
  // displayedColumns = ['orderId', 'customerId', 'motoboyId', 'localAddress', 'destAddress', 'price', 'orderDate', 'active'];


  displayedColumns = [];
  constructor(private ordersService: OrdersService, private motoService: MotoService) {

  }

  ngOnInit() {
    // this.dataSource.data === this.order used this way to filter
    this.dataSource.data = this.ordersService.allOrders;
    this.ordersService.getAllOrders();
    this.ordersService.allOrdersObservable.subscribe((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data)
    })
    this.getUserType();
    this.initColumns();
    
    this.motoService.singleMotoObservable.subscribe((data) => {
      this.currentMotoBoy = data;
      console.log(this.currentMotoBoy)
    })
  }
  handleAsignToOrder(order) {
    this.ordersService.assignToOrder(order, this.currentMotoBoy);
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  refresh() {
    this.ordersService.getAllOrders();
  }
  getUserType(){
  // this.ordersService.getUserTypeFromServer().subscribe((type)=>{
  //   this.userType = type
  // })
  this.userType = "motoboy"
  }

  initColumns(){
    if(this.userType = "motoboy"){
      this.displayedColumns = ['orderId', 'customerName', 'customerPhone' , 'localAddress', 'destAddress', 'orderDate', 'active']
    }
  }
}




