import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { DataService } from '../services/data/data.service'
import { UserService } from '../services/userData/user.service';

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
  errorPass: string = ""
  errorUserName: string = ''
  // @Input()  booleanHeader: boolean=false;

  count: boolean = false;
  // @Output()  countChanged = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private routingService: DataService, private userService: UserService) { }
  ngOnInit(): void {

    // this.loginForm=new FormGroup({
    //   username:new FormControl('',Validators.required),
    //   password:new FormControl('',Validators.required)
    // })
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  login() {
    const formValue = this.loginForm.value
    this.authService.login(formValue.username, formValue.password).subscribe({
      next: (res) => {
        // console.log(res)
        // console.log("true")


        this.routingService.hash()


        localStorage.setItem('token', res.token)        // localStorage.setItem('data', JSON.stringify(res.deliveryGuy))
        // localStorage.setItem('data', JSON.stringify(res.deliveryGuy))
        // this.userService.setUserData(res.deliveryGuy)
        this.router.navigateByUrl('')

        // console.log(res.deliveryGuy)

        // console.log('data',this.userService.getUserData())

        // setTimeout(() => location.reload(), 1)
      }, error: (err) => {
        this.message = 'Wrong username or password!!'
      }
    })

  }

  goTo(props: string) {
    this.router.navigate([props])
  }

}

