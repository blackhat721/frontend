import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { User,Room, Topic } from '../utils/models';
import { catchError, forkJoin, retry } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class UserService {

  private _base = 'http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient) {}
  loginUser(requestData:any){
    const url = `http://127.0.0.1:8000/api/token/`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, requestData, { headers })
    // const token = response.
    // localStorage.setItem('token', token);
  }
  getUsers(){
    return this.http.get<User>(this._base);
  }
  getUser() {
    const id:number = 1;
    const url = `http://127.0.0.1:8000/api/users/${id}/`;
    console.log(url);
    return this.http.get<User>(url) 
  }
  postUser(requestData:any){
    const url = 'http://localhost:8000/api/users/';
    // requestData = { username: 'john.doe',
    //   password: 'secretpassword',
    //   email: 'john.doe@example.com', 
    //   phone_number:'123456789'};

    // Set the headers
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post(url, requestData, { headers })
  }
  updateUser(requestData:any){
    const id = 6
    // const requestData = { username: 'johndoe',
    //   password: 'secretpassword',
    //   email: 'john.doe@example.com', 
    //   phone_number:'123456789'};
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const url = `http://localhost:8000/api/users/${id}/`;
    return this.http.patch(url, requestData, { headers: headers });
  }
  deleteUser(){
    const id:number = 4;
    const url = `http://127.0.0.1:8000/api/users/${id}/`;
    // const headers = new HttpHeaders()
      // .set('Content-Type', 'application/json');
    return this.http.delete(url);

  }
}


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private userservice: UserService,
  private http:HttpClient) {}
  private _base = 'http://127.0.0.1:8000/api/';
  fetchTopic(){
    const url = `${this._base}topics/1/`;
    // console.log(url)
    return this.http.get<Topic>(url);
  }
  fetchRoom(){}
  fetchRooms(){
    const url = `${this._base}rooms/`
    console.log(url)
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const access = localStorage.getItem('access')
    headers.set('Authorization','Bearer ${access}')
    return this.http.get<Room[]>(url,{headers:headers});
  }

  postRoom():any  {
    const url = `${this._base}rooms/`;
    return forkJoin([this.userservice.getUser(), this.fetchTopic()]).pipe(
      switchMap(([hostData, topicData]) => {
        const requestData = {
          host: hostData,
          name: 'philosophy',
          topic: topicData,
          description:'blah blah',
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, {"host":requestData.host,"name":requestData.name,"topic":requestData.topic,"description":requestData.description}, { headers })
        // .subscribe((d)=>console.log(d));
        console.log(requestData);
        console.log('requestedData printed above');
      })
    );
    // return forkJoin([
    //   this.userservice.getUser(),
    //   this.fetchTopic()
    // ]).pipe(
    //   map(([hostData, topicData]) => {
    //     const requestData = {
    //       host: hostData,//null
    //       name: "philosophy",
    //       topic: topicData,
    //       participants: []
    //     };
    //     const headers = new HttpHeaders()
    //     .set('Content-Type', 'application/json');
    //     console.log(requestData);
    //     console.log("requestedData printed above");
    //     return this.http.post<any>(url, requestData,{headers})
    //     .subscribe(
    //       (value) => {
    //         // Handle the emitted value
    //         console.log(value);
    //       },
    //       (error) => {
    //         // Handle the error
    //         console.error(error);
    //       },
    //       () => {
    //         // Handle completion
    //         console.log('Observable completed');
    //       }
    //     )
    //     console.log("world")
      // })
    // );
  }

}
