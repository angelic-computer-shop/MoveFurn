import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriverregComponent } from './driverreg/driverreg.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingsComponent,DriverregComponent,
    FooterComponent,
    NavbarComponent,
    UserregComponent,
    ViewbookingsComponent,
    HomeComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
