import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AcceptsOrdersComponent } from './accepts-orders/accepts-orders.component';
import { RejectsOrdersComponent } from './rejects-orders/rejects-orders.component';
import { LoginComponent } from './login/login.component';
import { OnDeliverComponent } from './on-deliver/on-deliver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardGuard } from './shared/guard/canActivate/auth-guard.guard';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from "./shared/guard/canActivateChild/auth/auth.guard"
import { AuthLoginGuard } from './shared/guard/canActivate/auth-login.guard';
import { AboutComponent } from './about/about.component';
const routes: Routes = [

  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', title: 'wating orders', component: OrdersComponent },

      { path: 'profile', title: 'profile', component: ProfileComponent },
      { path: 'delivered', title: 'delivared', component: AcceptsOrdersComponent }

      ,
      { path: 'onDelivering', title: 'onDelivering', component: OnDeliverComponent }
      , { path: 'not-found', component: NotFoundComponent }

      ,
      { path: 'returned', title: 'returned', component: RejectsOrdersComponent }
      ,
      { path: 'about', title: 'About Us', component: AboutComponent }

    ] , canActivate: [AuthGuard]
  },

  { path: 'login', title: 'login', component: LoginComponent,canActivate:[AuthLoginGuard] },
  { path: '**', redirectTo: 'orders', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
