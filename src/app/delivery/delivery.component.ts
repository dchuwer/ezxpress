import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from '../Order';
import { MapComponent } from '../map/map.component'
import { MapService } from '../map.service';
import { EzxpressService } from '../ezxpress.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
localAddress : string
map : MapComponent 
//@Input() address: string;
//@Output() checkGoogleAddress: EventEmitter<String> = new EventEmitter();
newOrder = new Order();

  constructor(private mapService: MapService,private ezxpressService:EzxpressService) { 
    
    ////this.localAddress = "ttttt"
   
    this.mapService.addressUpdated.subscribe( (data) => {
    // // this.localAddress = data
      console.log(this.localAddress)})
    
    //this.order.localAddress = "test"
  }

  checkAddress(localAddress) {
     debugger
     console.log(localAddress)
     //this.checkGoogleAddress.emit(localAddress);
  }
  
  calculateRate(newOrder){
    console.log(newOrder)
  }

  submitNewOrder(){
    console.log("kkkgfgfgdfgfd" + this.newOrder);
    this.ezxpressService.addNewOrder(this.newOrder)
  }


  ngOnInit() {
    this.mapService.addressUpdated.subscribe( (data) => {
      ////this.order.localAddress = data
      console.log(data)})
  }

}
