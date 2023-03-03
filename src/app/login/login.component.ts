import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // loginForm!:FormGroup;
  submitted = false;
  // userName: any;
errorPass:string=""
errorUserName:string=''
  constructor(private fb:FormBuilder,private router:Router){}

  // ngOnInit(): void
  // {
  //   this.loginForm = this.fb.group({
  //     userName:['',[Validators.required]],
  //     passWord:['',[Validators.required,Validators]]
  //   });
  // }

  // get loginData(){
  //   return this.loginForm.controls;
  // }

  // onSubmit()
  // {
  //      this.submitted = true;
  //      if(this.loginForm.valid)
  //      {
  //        localStorage.setItem("userName",this.loginForm.get('userName')?.value);

  //       //  localStorage.setItem("token",this.userName?.value);

  //        localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);

  //         this.clear();
  //         this.loginForm.disable();
  //         this.goTo('orders')

  //         console.log(this.userName)
  //      }

  // }

  // clear()
  // {
  //   this.loginForm.patchValue({
  //     userName:'',
  //     passWord:''
  //   });
  // }
  // goTo(param:any) {

  //   this.router.navigate([param])
  //   }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(7)]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if(this.myForm.touched || this.myForm.invalid){
      this.errorPass="Password is required";
      this.errorUserName="User name is required";

    }else if (this.myForm.touched && this.myForm.valid)
    this.goTo("orders")
  }
  goTo(props:string){
    this.router.navigate([props])
  }

}

