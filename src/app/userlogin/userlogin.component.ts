import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";

import {RegistrationService} from '../shared/registration.service';
import {Registration} from "../shared/registration.model";
// import {CurrentonlineuserService} from "../shared/currentonlineuser.service";
// import {CurrentonlineuserService} from '../shared/currentonlineuser.service';
// import {Currentonlineuser} from "../shared/currentonlineuser.model";


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [RegistrationService]

})



export class UserloginComponent implements OnInit {

  public allUsers: any = [];
  public productToEdit = null;
  public editorReady: boolean;
  public userLoginForm: FormGroup;
  public userAccessForm: FormGroup;
  public editProductsForm: FormGroup;
  public load = {
    requesting: false,

  }

  static userLoginForm = () => {
    return {
      username: ["", Validators.required],
      password: ["", Validators.required],
      phonenumber: ["", Validators.required],
    }
  }

  // static userAccessForm = () => {
  //   return {
  //     useremail: ["", Validators.required],
  //     userpassword: ["", Validators.required],
  //     // phonenumber: ["", Validators.required],
  //   }
  // }

  constructor(private registrationService: RegistrationService,
              // private currentonlineuserService: CurrentonlineuserService,
              private fb: FormBuilder)

  {
    this.userLoginForm = this.fb.group(UserloginComponent.userLoginForm());
    // this.userAccessForm = this.fb.group(UserloginComponent.userAccessForm());
    // this.editProductsForm = this.fb.group(AdminproductstableComponent.editProductsForm());

  }


  ngOnInit() {
  }


  //for New users' registration submit
  onSubmitUserLogin() {
    this.load.requesting = true;
    this.registrationService.postRegistration(this.userLoginForm.value).subscribe(
      (res) => {
        this.load.requesting = false;
        this.allUsers.push(res);
        this.userLoginForm.reset();

        // this.resetForm(form);
        // this.getProducts();

      },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }
  //for New users' registration submit

//  //for users' login submit
//  onSubmitUserAccess() {
//   this.load.requesting = true;
//   this.currentonlineuserService.postCurrentonlineuser(this.userAccessForm.value).subscribe(
//     (res) => {
//       this.load.requesting = false;
//       this.allUsers.push(res);
//       this.userAccessForm.reset();
//
//       // this.resetForm(form);
//       // this.getProducts();
//
//     },
//     (error) => {
//       this.load.requesting = false;
//
//     },
//     () => {
//
//     });
// }
// //for users' login submit


}

