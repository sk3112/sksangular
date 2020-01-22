import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
  email: any;
  pass: any;

  constructor(
    private toastr: ToastrService
  ) { }
  changeMessage(message: string){
    this.messageSource.next(message);
  }
  login(data){
  if(data.email=="abc@gmail.com"&&data.pswd=="12345"){
    //console.log("login Successfully");
    let id = uuid();
    console.log('my id.....',id);
    localStorage.setItem("ID",id);
    return true;
  }else{
    console.log("Invalid Credentials");
    return false;
  }
  }
  alertForSuccess(message,title){
    this.toastr.success(message,title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}