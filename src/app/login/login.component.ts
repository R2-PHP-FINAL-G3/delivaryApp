import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  submitted = false;
  userName: any;

  constructor(private fb:FormBuilder,private router:Router){}

  ngOnInit(): void
  {
    this.loginForm = this.fb.group({
      userName:['',[Validators.required,Validators.min(4)]],
      passWord:['',[Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
// '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$' for email
      )]]
    });
  }

  get loginData(){
    return this.loginForm.controls;
  }

  onSubmit()
  {
       this.submitted = true;
       if(this.loginForm.valid)
       {
          localStorage.setItem("userName",this.loginForm.get('userName')?.value);
          localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);
          this.clear();
          this.loginForm.disable();
          this.router.navigate(['orders',this.userName]);
          console.log(this.userName)
       }

  }

  clear()
  {
    this.loginForm.patchValue({
      userName:'',
      passWord:''
    });
  }
}
