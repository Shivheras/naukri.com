import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userFormGroup:FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.userFormGroup = formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required],
      experience:''
      
    })
   
  }

  ngOnInit(): void {
    
  }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
}
