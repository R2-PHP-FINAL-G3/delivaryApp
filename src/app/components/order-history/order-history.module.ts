import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptsOrdersComponent } from './accepts-orders/accepts-orders.component';
import { RejectsOrdersComponent } from './rejects-orders/rejects-orders.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AcceptsOrdersComponent,
    RejectsOrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AcceptsOrdersComponent,
    RejectsOrdersComponent
  ]
})
export class OrderHistoryModule { }
