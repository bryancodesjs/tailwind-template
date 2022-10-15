import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { HomeNavbarComponent } from './components/views/shared/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/views/shared/home-footer/home-footer.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeNavbarComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts')
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
