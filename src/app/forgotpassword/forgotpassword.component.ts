import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  resetFormGroup:FormGroup;
  name2 = {
    'display': 'none'
  }
  email2 = {
    'display': ''
  }

  constructor(private formBuilder: FormBuilder,private router:Router) { 
    this.resetFormGroup = formBuilder.group({
      email:['',Validators.required],
     name:['',Validators.required],
      otp:['',Validators.required]
     
      
    })
   
  
  }

  ngOnInit(): void {
    
  }
  submit()
  {
    console.log(this.resetFormGroup.value);
  }
  email()
  {
    this.name2={
      'display': 'none'
      }
      this.email2={
        'display': ''
      }
    
  }
    name()
    {
      this.name2={
      'display': ''
      }
      this.email2={
        'display': 'none'
      }
    }
}