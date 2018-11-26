import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminproductstableComponent } from './adminproductstable/adminproductstable.component';
import { AdminuserstableComponent } from './adminuserstable/adminuserstable.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NewproductsdetailsComponent} from './newproductsdetails/newproductsdetails.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { AboutshopcartComponent} from './aboutshopcart/aboutshopcart.component';
import {ContactusComponent} from "./contactus/contactus.component";
import {ShopcartwatchesComponent} from "./shopcartwatches/shopcartwatches.component";
import {UserloginComponent} from "./userlogin/userlogin.component";
import {UserdashboardComponent} from "./userdashboard/userdashboard.component";
import {UserproductdetailsComponent} from "./userproductdetails/userproductdetails.component";
import {MyDetailsComponent} from "./my-details/my-details.component";
import {LandingchatComponent} from './landingchat/landingchat.component';
import {ChatComponent} from './chat/chat.component';
import { AdmineditproductsComponent } from './admineditproducts/admineditproducts.component';
import { UsersuccessfulauctionsComponent } from './usersuccessfulauctions/usersuccessfulauctions.component';
import { NavbarandfooterComponent } from './navbarandfooter/navbarandfooter.component';
import { AdmineditusersComponent } from './admineditusers/admineditusers.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { AdminbidstableComponent } from './adminbidstable/adminbidstable.component';
import { AdminaddbidComponent } from './adminaddbid/adminaddbid.component';
import { AdminauctionstableComponent } from './adminauctionstable/adminauctionstable.component';
import { AdminaddauctionComponent } from './adminaddauction/adminaddauction.component';


export const APP_ROUTES: Routes = [
    { path: 'adminaddauction', component:AdminaddauctionComponent},
    { path: 'adminauctionstable', component:AdminauctionstableComponent},
    { path: 'adminaddbid', component:AdminaddbidComponent},
    { path: 'adminbidstable', component:AdminbidstableComponent},
    { path: 'usereditform', component:AdminadduserComponent},
    { path: 'admineditusers/:id', component:AdmineditusersComponent},
    { path: 'adminuserstable', component:AdminuserstableComponent},
    { path: 'navbarandfooter', component:NavbarandfooterComponent},
    { path: 'usersuccessfulauctions', component:UsersuccessfulauctionsComponent },
    { path: 'admineditproducts/:id', component: AdmineditproductsComponent }, 
    { path: 'adminproductdetails/:id', component: NewproductsdetailsComponent},
    { path: 'adminproductstable', component: AdminproductstableComponent},
    // { path: 'userdetails', component: AdminuserstableComponent},
    { path: 'login', component: LoginpageComponent},
    { path: 'products', component: UserproductdetailsComponent},    
    { path: 'products/:id', component: UserproductdetailsComponent},
    // { path: 'userproducts/:id', component: UserproductdetailsComponent},
    { path: 'registerpage', component: RegisterpageComponent},
    { path: 'aboutshopcart', component: AboutshopcartComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'shopcartwatches', component: ShopcartwatchesComponent},
    { path: 'userlogin', component: UserloginComponent},
    { path: 'userdashboard', component:UserdashboardComponent},
    // { path: 'userproductdetails', component:UserproductdetailsComponent},
    { path: 'mydetails', component:MyDetailsComponent},
    { path: 'landingchat', component:LandingchatComponent},
    { path: 'appchat', component:ChatComponent},
    { path: '', component: UserlandingComponent},


];
// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
//
// }
// export const routingComponents = [ AdminproductstableComponent, AdminuserstableComponent, LoginpageComponent, NewproductsdetailsComponent, RegisterpageComponent]
