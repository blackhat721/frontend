import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/api-service.service';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/utils/models';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  MessageForm!:FormGroup
  MessageArray:Message[] = []
  roomId!:Number;
  flag:boolean;
  _indx:number = 1;
  classArray = ["border-primary","border-secondary","border-info","border-dark"];
  textArray = ["text-primary","text-secondary","text-info","text-dark"];
  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,
    private message_service:MessageService,private room_service:RoomService){
      this.flag = true;
    }
  ngOnInit(): void {
    this._indx = this.randomIndex();
    this.MessageForm = this.formBuilder.group({
      body: ['', Validators.required],
      
    });
    this.route.paramMap.subscribe(params => {
      this.roomId = Number(params.get('id'));
      console.log(this.roomId);
      // You can use this.itemId to fetch the item details using the ID
    });
    // this.room_service.
    this.getRoomMessages()
  }
  submitForm(){
    console.log("button press")
    console.log(this.MessageForm.value)
    
    
  }
  getRoomMessages(){
    this.message_service.fetchRoomMessages().subscribe((msgArr)=>{
      msgArr.forEach((msg)=>{
        this.MessageArray.push(msg);
        console.log(msg);
        console.log(this.MessageArray[0]);
      })

    })
  }
  getflag():boolean{
    this.flag = !this.flag;
    console.log(this.flag);
    return this.flag;
  }
  getRandomClass():string{
    // const randomIndex = Math.floor(Math.random() * this.classArray.length);
    if (this._indx>=this.classArray.length){
      this._indx = 0;
    }
    // console.log(this._indx);
    return this.classArray[this._indx++];
    
  }
  getTextclass():string{
    return this.textArray[this._indx-1];
  }
  randomIndex():number{
    return Math.floor(Math.random() * this.classArray.length);
  }
}
