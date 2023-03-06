import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { DelevaryInfo } from '../interfaces/delevary-info';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  
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
  constructor(){}
 ngOnInit() :void {
this.hisInfo=(JSON.parse( localStorage.getItem('data') || ''))
      // console.log(res)
      console.log('\n inf \n',this.hisInfo,'\n inf \n')


console.log()
  }  

}
