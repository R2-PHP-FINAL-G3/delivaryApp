import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OrderHistoryModule } from './components/order-history/order-history.module';
import { ComponentsModule } from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    FontAwesomeModule

  ],
  providers: [
{
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
