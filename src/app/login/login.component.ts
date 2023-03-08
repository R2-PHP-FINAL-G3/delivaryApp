import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RoutingService } from '../shard/services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  [x: string]: any;
  loginForm!: FormGroup;
  message = '';
//  @Output() isLoggedIn = new EventEmitter();
errorPass:string=""
errorUserName:string=''
// @Input()  booleanHeader: boolean=false;

count:boolean =false;
@Output()  countChanged = new EventEmitter<boolean>();

  constructor(private formBuilder:FormBuilder,private router:Router , private authService :AuthService ,private routingService:RoutingService){}
  ngOnInit(): void {
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['/orders']);
    }else{
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  }

  login(){
    const formValue = this.loginForm.value
    this.authService.login(formValue.username,formValue.password).subscribe({next: (res) => {
      // console.log(res)
      // console.log("true")


      this.routingService.hash()


      localStorage.setItem('1'+this.routingService.hashing+'Em',Math.floor((Math.random() * 100) + 1)+'|'+Math.floor((Math.random() * 100) + 1)+'U3JeFybef'+this.routingService.hashing+'r7T4bTc8QbuU7tdvwT')
      localStorage.setItem('3'+this.routingService.hashing+'Em',Math.floor((Math.random() * 100) + 1)+'|'+Math.floor((Math.random() * 100) + 1)+'U3JevwTFybef'+this.routingService.hashing+'r7T4'+this.routingService.hashing)
      localStorage.setItem('4YCgix4J1K9uEm',res.token)
      localStorage.setItem('5'+this.routingService.hashing+'Em',Math.floor((Math.random() * 100) + 1)+'|'+Math.floor((Math.random() * 100) + 1)+'U3Jeyef'+this.routingService.hashing+'r7T4bT1Ec8QbuU7tdvwT')
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

