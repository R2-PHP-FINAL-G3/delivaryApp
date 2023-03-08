import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { DelevaryInfo } from '../interfaces/delevary-info';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
boolChangeData: boolean = false;

  hisInfo:DelevaryInfo={
    companyId: 0,
    created_at: '',
    email: '',
    id: 0,
    motorCycleNumber: '',
    name: '',
    nationalId: '',
    password: '',
    phone: '',
    salary: '',
    status: '',
    updated_at: '',
    userName: ''
  }

// hisInfo=JSON.parse({})
constructor(private  router : Router,private authService:AuthService){}
ngOnInit() :void {
  if(!this.authService.isAuthenticated()){
  this.router.navigate(['login'])}else{
this.hisInfo=(JSON.parse( localStorage.getItem('data') || ''))
      console.log(this.hisInfo)
      // console.log('\n inf \n',this.hisInfo,'\n inf \n')

  }
  }
changeData(){
  this.boolChangeData=true
}
saveChangeData(){
  this.boolChangeData=false
}
}
