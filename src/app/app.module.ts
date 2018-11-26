import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
// import { AppRoutingModule, routingComponents } from './app-routing.module';


  // src/app/app.module.ts
  import { ChatService } from './services/chat.service';
  import { PusherService } from './services/pusher.service';
  // import { HttpClientModule } from '@angular/common/http'; 
  // import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {AppComponent} from './app.component';
import {Routes} from '@angular/router';
// import { HomepageComponent } from './homepage/homepage.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import {FirstpageComponent} from './firstpage/firstpage.component';
// import { EcommercepageComponent } from './ecommercepage/ecommercepage.component';
import { NewproductsdetailsComponent } from './newproductsdetails/newproductsdetails.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
// import { AdminsidebarComponent} from "./adminsidebar/adminsidebar.component";
// import { AdminheadingbarComponent } from "./adminheadingbar/adminheadingbar.component";
import {CompanypageComponent} from "./companypage/companypage.component";
import {APP_ROUTES} from "./app-routing.module";

// import { AdminproductstableComponent } from './adminproductstable/adminproductstable.component';
import { AdminuserstableComponent } from './adminuserstable/adminuserstable.component';
import {AdminbasicpageComponent} from './adminbasicpage/adminbasicpage.component';
import {AdminsidebarComponent} from './adminsidebar/adminsidebar.component';
import {NavbarandfooterComponent} from './navbarandfooter/navbarandfooter.component';
import {RegisterpageComponent} from './registerpage/registerpage.component';
import {AdminproductstableComponent} from "./adminproductstable/adminproductstable.component";
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AboutshopcartComponent } from './aboutshopcart/aboutshopcart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShopcartwatchesComponent } from './shopcartwatches/shopcartwatches.component';
import {CurrentonlineuserService} from "./shared/currentonlineuser.service";
import {RegistrationService} from "./shared/registration.service";
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserproductdetailsComponent } from './userproductdetails/userproductdetails.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { ChatComponent } from './chat/chat.component';
import { LandingchatComponent } from './landingchat/landingchat.component';
import { AdmineditproductsComponent } from './admineditproducts/admineditproducts.component';
import { UsersuccessfulauctionsComponent } from './usersuccessfulauctions/usersuccessfulauctions.component';
import { AdmineditusersComponent } from './admineditusers/admineditusers.component';
// import { UsereditformComponent } from './usereditform/usereditform.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { AdminbidstableComponent } from './adminbidstable/adminbidstable.component';
import { AdminaddbidComponent } from './adminaddbid/adminaddbid.component';
import { AdminauctionstableComponent } from './adminauctionstable/adminauctionstable.component';
import { AdminaddauctionComponent } from './adminaddauction/adminaddauction.component';

// import { CompanylandingpageComponent } from './companylandingpage/companylandingpage.component';


@NgModule({
  declarations: [
    AppComponent,

    // HomepageComponent,
    // DashboardComponent,
    FirstpageComponent,
    // EcommercepageComponent,
    NewproductsdetailsComponent,
    LoginpageComponent,
    // AdminpageComponent,
    AdminproductstableComponent,
    AdminuserstableComponent,
    // AdminbasicpageComponent,
    AdminsidebarComponent,
    NavbarandfooterComponent,
    // routingComponents,
    // CompanylandingpageComponent,
    RegisterpageComponent,
    CompanypageComponent,
    UserlandingComponent,
    UserloginComponent,
    AboutshopcartComponent,
    ContactusComponent,
    ShopcartwatchesComponent,
    UserdashboardComponent,
    ProductdetailsComponent,
    UserproductdetailsComponent,
    MyDetailsComponent,
    ChatComponent,
    LandingchatComponent,
    AdmineditproductsComponent,
    UsersuccessfulauctionsComponent,
    AdmineditusersComponent,
    // UsereditformComponent,
    AdminadduserComponent,
    AdminbidstableComponent,
    AdminaddbidComponent,
    AdminauctionstableComponent,
    AdminaddauctionComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [RegistrationService, CurrentonlineuserService, ChatService, PusherService],

  bootstrap: [AppComponent]
})
export class AppModule {
}

  // providers:[ChatService, PusherService]