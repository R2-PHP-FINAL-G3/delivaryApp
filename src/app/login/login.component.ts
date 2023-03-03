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
  // submitted = false;
  // userName: any;

  // constructor(private fb:FormBuilder,private router:Router){}

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
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}

