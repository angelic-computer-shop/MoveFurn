import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriverregComponent } from './driverreg/driverreg.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { UserRoleGuard } from './user-role.guard';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';



// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'viewbookings', component: ViewbookingsComponent, canActivate: [AuthGuard, UserRoleGuard], data: { roles: ['driver'] } },
//   { path: 'login', component: LoginComponent },
//   { path: 'userreg', component: UserregComponent},
// ];


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bookings', component: BookingsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


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
    StatusComponent,
    CustomerComponent,
    
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
