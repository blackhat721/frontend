import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!: FormGroup;
 
  requestData!:any;
  registerUser!:boolean;
  constructor(private formBuilder: FormBuilder,private api:UserService) { }

  ngOnInit(): void {
    this.registerUser = true
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, ]]
    });
   
  }
  account(){
    this.registerUser = !this.registerUser;
  }
  onUpdate(): void {
    if (this.registrationForm.valid) {
      // Handle update operation here
      this.api.updateUser(this.registrationForm.value).subscribe((d)=>console.log(d))
      // console.log('Update button clicked');
      // console.log(this.registrationForm.value);
    }
  }
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle form submission here
      this.requestData = this.registrationForm.value;
      
      this.api.postUser(this.requestData).subscribe((d)=>console.log(d))
      // console.log(this.registrationForm.get('first_name')?.value)
      // console.log(this.registrationForm.value);
    } else {
      // Form is invalid, display error messages if needed
    }
  }
}
