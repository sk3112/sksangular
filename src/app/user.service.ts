import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  email: any;
  pass: any;

  constructor() { }
  login(data){
  if(data.email=="abc@gmail.com"&&data.pswd=="12345"){
    console.log("login Successfully");
  }else{
    console.log("Invalid Credentials");
    
  }
  }
}