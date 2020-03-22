import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userFormGroup:FormGroup;
  user:any=[];
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
    this.user.push(this.userFormGroup)
    this.user.forEach(element => {
      console.log(element);
    });
    alert("Registeration Successfull")

    console.log(this.userFormGroup.value);
  }
}
