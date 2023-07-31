import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/api-service.service';
import { User } from '../../utils/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private api:UserService){

  }
  ngOnInit(): void {
    this.getUserData()
  }
  
  user!:User[]
  getUsersData(){
    this.api.getUser().subscribe((data)=>{console.log(data)})
  }
  getUserData(){
    console.log("hello")
    // this.api.getUser()
    this.api.getUser().subscribe((data)=>{console.log(data)})
    console.log("world")
    
  }
  postUserData(){
    // this.api.postUser().subscribe((data)=>{console.log(data)})
  }
  updateUserData(){
    // this.api.updateUser().subscribe((data)=>{console.log(data)})
  }
  deleteUserData(){
    this.api.deleteUser().subscribe((data)=>{console.log(data)})
  }
}
