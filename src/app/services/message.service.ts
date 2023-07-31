import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../utils/models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  fetchRoomMessages() {
    const room_id:number = 1;
    const url = `http://127.0.0.1:8000/api/messages/by_room/${room_id}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    console.log(url);
    return this.http.get<Message[]>(url,{headers:headers}) 
  }
}
