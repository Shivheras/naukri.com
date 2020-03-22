import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{User} from './../user-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup:FormGroup;
 
  User=[
    {name:"abc",email:"abc@gmail.com",password:"123"}
   
   
 ]
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
    var check:Boolean=false;
    for(var i=0;i<this.User.length;i++){
    if(this.loginFormGroup.value.name==this.User[i].email && this.loginFormGroup
    .value.password==this.User[i].password)
    {
     alert("you are Sucessfully logged in");
      check=true;
      
break;
    }
    else if (this.loginFormGroup.value.name==this.User[i].name && this.loginFormGroup
      .value.password==this.User[i].password)
      {
       alert("you are Sucessfully logged in");
        check=true;
        
  break;
  }
  if(check==false){alert("Invalid Email or Password!!");}
}
  }
}
