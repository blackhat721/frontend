import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  access!:any;
  refresh!:any;

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      username: ['', Validators.required],
      password: ['', [Validators.required, ]]
    });
  }
  login():void{
    if(this.loginForm.valid){
      this.userService.loginUser(this.loginForm.value).subscribe((response:any)=>{
        console.log(response.access)
        this.access = response.access;
        this.refresh = response.refresh;
        console.log(typeof(response))
        
      })
      localStorage.setItem('access',this.access);
      localStorage.setItem('refresh',this.access);
      this.router.navigate(['/'])
      
    }
  }
}
