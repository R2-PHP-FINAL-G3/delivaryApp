import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from '../app.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { LoginComponent } from './login/login.component';
import { OnDeliverComponent } from '../components/on-deliver/on-deliver.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ByscalSpinnerComponent } from './components/byscal-spinner/byscal-spinner.component';
import { AboutComponent } from '../components/about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderHistoryModule } from '../components/order-history/order-history.module';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,

    ByscalSpinnerComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ],
  exports: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    ByscalSpinnerComponent,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
