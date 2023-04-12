import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrComponent } from './or/or.component';

import { RouterModule ,Routes} from '@angular/router';
import { OrdersComponent } from '../components/orders/orders.component';
import{ProfileComponent} from '../components/profile/profile.component';
const routes:Routes =[
  {path:'o',title:'o',component:OrComponent},
  { path: 'orders', title: 'Wating Orders', component: OrdersComponent },
        { path: 'profile', title: 'Profile', component: ProfileComponent },

]
@NgModule({
  declarations: [
    OrComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
