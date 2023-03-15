import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { AcceptsOrdersComponent } from './accepts-orders/accepts-orders.component';
import { RejectsOrdersComponent } from './rejects-orders/rejects-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnDeliverComponent } from './on-deliver/on-deliver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { AuthService } from './shared/auth/services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import * as compression from 'compression';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './layout/layout.component';
import { ByscalSpinnerComponent } from './shared/components/byscal-spinner/byscal-spinner.component';
import { AboutComponent } from './about/about.component';
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
    SpinnerComponent,
    ProfileComponent,
    LayoutComponent,
    ByscalSpinnerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
