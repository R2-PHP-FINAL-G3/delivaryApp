import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AcceptsOrdersComponent } from './accepts-orders/accepts-orders.component';
import {RejectsOrdersComponent} from './rejects-orders/rejects-orders.component';
import { LoginComponent } from './login/login.component';
import { OnDeliverComponent } from './on-deliver/on-deliver.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [

  {path:'',redirectTo:"orders", pathMatch:'full'},

  {path:'orders', component: OrdersComponent}
  ,
  {path:'accepts', component: AcceptsOrdersComponent}

  ,
  {path:'accepts/:id', component: AcceptsOrdersComponent}
  ,
  {path:'on-delivering', component: OnDeliverComponent}
,
  {path:'on-delivering/:id', component: OnDeliverComponent}
  ,
  {path:'not-found', component: NotFoundComponent}

  ,
  {path:'rejects', component: RejectsOrdersComponent}
  ,
  {path:'rejects/:id', component: RejectsOrdersComponent}
  ,
  {path:'login' , component: LoginComponent},
  // ,
  // {path:'**',redirectTo:'orders' , pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
