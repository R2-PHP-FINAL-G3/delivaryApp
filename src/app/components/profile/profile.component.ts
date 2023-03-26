import { Component, OnInit } from '@angular/core';
import { DelevaryInfo } from '../../shared/interfaces/delevary-info';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public sumFeeses = localStorage.getItem('sumFeeses')
  public FontAwesome = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faMoneyBill: faMoneyBill,
    faMotorcycle: faMotorcycle,
    faWallet: faWallet,
    faHomeAlt: faHomeAlt
  }
  dataUpdate!: FormGroup;

  public boolChangeData: boolean = false;
  message: any = ''
  confirmEditing = ''
  private id: any = ''
  public delevaryGuyInfo: DelevaryInfo = {
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
  DateChangePattern: any;

  // delevaryGuyInfo=JSON.parse({})
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getDataInfo()
    this.dataUpdate = this.fb.group({
      email: ["", Validators.required],
      motorCycleNumber: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      userName: ["", Validators.required],

    })
  }

  getDataInfo(): void {
    this.authService.inf().subscribe((res: any) => {
      this.delevaryGuyInfo = res.data
      // this.DateChangePattern = [[...res.data.created_at],[...res.data.updated_at]].map(p=>p.splice(0,10,0))
      // console.log(this.delevaryGuyInfo)
      this.id = res.data.id
    }, (err) => {
      this.message = err.error.message
      // console.log(err.error.message)
    })
  }
  changeData() {
    this.boolChangeData = true
    setTimeout(() => this.confirmEditing = 'Are you sure to change your data?', 300)
  }
  confirmEdit() {
    this.confirmEditing = 'are you want to change'
  }
  save(): void {
    const dataUpdateValue = this.dataUpdate.value
    // console.log(dataUpdateValue)
    this.authService.deliveryUpdateData(dataUpdateValue.email, dataUpdateValue.motorCycleNumber, dataUpdateValue.password, dataUpdateValue.phone, dataUpdateValue.userName, this.id).subscribe(res => {
      // console.log(res)
      this.boolChangeData = false
      localStorage.removeItem('sumFeeses')
      localStorage.removeItem('token');
      this.router.navigate(['login'])
    }, (err: string) => {
      this.message = 'Please complete all information to be changed !!'

      console.log('111111111111', err)
    })

  }

}
