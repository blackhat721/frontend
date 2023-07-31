import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  acc!:string;
  constructor(private router:Router){}
  ngOnInit(): void {
      const token = localStorage.getItem('access')
      console.log(token)
      if(token){
        this.acc = 'logout'
      }
      else{
        console.log(token)
        this.acc = 'login'
      }
      console.log("vivek")
      console.log(this.acc)
  }
  Onclick(){
    if(this.acc=='login'){
      this.router.navigate(['/login']);

    }else{
        localStorage.clear()
        this.acc = "login"
    }
  }
  

}
