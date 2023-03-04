import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { AcceptsOrdersComponent } from './accepts-orders/accepts-orders.component';
import { RejectsOrdersComponent } from './rejects-orders/rejects-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnDeliverComponent } from './on-deliver/on-deliver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shard/spinner/spinner.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    AcceptsOrdersComponent,
    RejectsOrdersComponent,
    LoginComponent,
    OnDeliverComponent,
    NotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
RouterModule,
BrowserModule,
HttpClientModule,
ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
