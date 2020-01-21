import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {
loginform:FormGroup;
email:AbstractControl;
pswd:AbstractControl;
  constructor(
    //private spinner: NgxSpinnerService,
    //private router:Router,
    private formbuilder:FormBuilder,
    private userService:UserService
  ) {
    this.loginform = formbuilder.group({
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
  }

  ngOnInit() {
  }
  login(){
console.log("Method Running.....");
let senddata ={
email:this.loginform.value.email,
pswd: this.loginform.value.pswd
 }
 console.log("my data...",senddata);
 let data =this.userService.login(senddata);
}

}
