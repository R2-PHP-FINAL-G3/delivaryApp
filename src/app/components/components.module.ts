import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderHistoryModule } from './order-history/order-history.module'
import { SharedModule } from '../shared/shared.module';
import { OnDeliverComponent } from './on-deliver/on-deliver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { AcceptsOrdersComponent } from './order-history/accepts-orders/accepts-orders.component';
import { RejectsOrdersComponent } from './order-history/rejects-orders/rejects-orders.component';

const routes: Routes = [




]

@NgModule({
  declarations: [
    OrdersComponent,
    OnDeliverComponent,
    NotFoundComponent,
    ProfileComponent,
    LayoutComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    OrderHistoryModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrdersComponent,
    OrderHistoryModule

  ]
})
export class ComponentsModule { }
