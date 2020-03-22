import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.loginFormGroup=this.formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  submit()
  {
    console.log(this.loginFormGroup.value);
  }
}
