import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  showAlert =false;
  alertMessage ='';
  alertColor=''
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.minLength(3),
  ]);
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  age = new FormControl('',[
    Validators.required,
    Validators.min(12),
    Validators.max(69),
  ]);
  password = new FormControl('',[
    Validators.required,
    Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
  ]);
  confirm_password = new FormControl('',[
    Validators.required
  ]);
  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });


  register(){
    this.showAlert=true;
      this.alertMessage ='Please wait your account is being created.';
      this.alertColor='blue'
  }
}
