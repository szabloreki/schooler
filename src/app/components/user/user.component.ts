import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies:string[];
  hello: any;
  constructor( private dateService:DataService) {


  }

  ngOnInit() {
    this.hobbies = ['coding']
    this.name = 'John'
    this.email = 'grabara@dziadowski.com'
    this.age = 30;
    this.address = {
      street: '50 main st',
      city: 'Boston',
      state: 'Colorado'
    }
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby)
    return false;
  }
  deleteHobby(hobby){ 
    for( let i = 0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1)
      }
    }
    return false;
  }
}

interface Address {
  street:string;
  city:string;
  state:string;
}
