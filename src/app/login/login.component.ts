import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  message = '';
//  @Output() isLoggedIn = new EventEmitter();
errorPass:string=""
errorUserName:string=''
// @Input()  booleanHeader: boolean=false;

count:boolean =false;
@Output()  countChanged = new EventEmitter<boolean>();

  constructor(private formBuilder:FormBuilder,private router:Router , private loginService :AuthService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })

  }
  login(){
    const formValue = this.loginForm.value
    this.loginService.login(formValue.username,formValue.password).subscribe({next: (res) => {
      // console.log(res)
      // console.log("true")

      localStorage.setItem('token',res.token)
      localStorage.setItem('data',JSON.stringify(res.deliveryGuy) )

      this.router.navigate(['/orders'])
      
      console.log(res.deliveryGuy)
      setTimeout(()=>location.reload(),1)
    },error : (err)=>{
      this.message='Wrong username or password!!'
    }})

  }

  goTo(props:string){
    this.router.navigate([props])
  }

}

