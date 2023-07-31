import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/api-service.service';
import { Room } from '../../utils/models';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
  // room = {host:'vivek',topic:'DRF',name:'pythonRoom',
  // description:'starting web devp with python',created:'2 Days ago'};
  rooms: Room[] = [];
  _indx:number = 0;
  RoomForm: FormGroup;
  // loginForm:FormGroup;

  classArray = ["bg-primary","bg-secondary","bg-success","bg-danger",
  "bg-warning","bg-info","bg-dark"];

  
  constructor(private api:RoomService,private formBuilder: FormBuilder){
    this.RoomForm = this.formBuilder.group({
      name: ['', Validators.required],
      host: ['', [Validators.required,]],
      topic:['',Validators.required],
      description:['',]
    });
    // this.loginForm = this.formBuilder.group({
    //   username:['',Validators.required],
    //   password:['',]
    // });
  }
  
  ngOnInit(): void {
    
    this._indx = this.randomIndex();
    this.getRooms()
    // let req =this.api.fetchTopic()
    // console.log(req)
    // req.subscribe((d)=>console.log(d))
  }

  submitForm() {
    if (this.RoomForm.valid) {
      const formData = this.RoomForm.value;
      // console.log(formData);
      // let req = this.api.postRoom();
      this.api.postRoom().subscribe(
        (response: any) => {
          // Handle the POST response here
          console.log("response")
          console.log(response);
        },
        (error: any) => {
          // Handle any errors that occur
          console.log("error")
          console.error(error);
        }
      );
      // console.log(req); 
      // req.subscribe((d)=>console.log(d))
      // req.subscribe((data: any)=>{console.log(data)})
      // pipe(
      //   switchMap((roomObservable: Observable<Room>) => roomObservable)
      // ).subscribe(
      //   (room: Room) => {
      //     // Handle the room object here
      //     console.log(room);
      //   }
      // )
    }
  }
  getRooms(){
    this.api.fetchRooms().subscribe((value)=>{
      // console.log(value);
      console.log("hello");
      value.forEach((v)=>{console.log(v.id);
        this.rooms.push(v);
        // console.log(this.rooms[0]);
        console.log(v);
        console.log('v');
      });
    });
  }
  getRandomClass():string{
    // const randomIndex = Math.floor(Math.random() * this.classArray.length);
    if (this._indx>=this.classArray.length){
      this._indx = 0;
    }
    // console.log(this._indx);
    return this.classArray[this._indx++];
    
  }
  randomIndex():number{
    return Math.floor(Math.random() * this.classArray.length);
  }
}
