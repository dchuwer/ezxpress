import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service'
import { MotoBoy } from '../MotoBoy'
import {User} from '../user'
import {UsersService} from '../users.service'

@Component({
  selector: 'add-motoboy',
  templateUrl: './add-motoboy.component.html',
  styleUrls: ['./add-motoboy.component.css']
})
export class AddMotoboyComponent implements OnInit {
  selectPhoto = "";
  motoboy : MotoBoy = new MotoBoy();
  user : User = new User();

  constructor(private motoService: MotoService, private userService: UsersService) { }

  onPhotofile(event) {
    
    this.selectPhoto = event.target.files[0]
    //this.motoService.uploadPhoto(this.selectPhoto)

  }

  submitMotoBoy() {
    
    this.motoboy.photo = this.selectPhoto;
    let index = this.motoService.addMotoBoy(this.motoboy);
    this.userService.addNewClient(this.user);

  }

  ngOnInit() {
  }

}
