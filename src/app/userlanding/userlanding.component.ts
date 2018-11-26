import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import {AdminproductService} from '../shared/adminproduct.service';
import {Adminproduct} from "../shared/adminproduct.model";
import {RegistrationService} from '../shared/registration.service';
import {Registration} from "../shared/registration.model";
import {CurrentonlineuserService} from "../shared/currentonlineuser.service";
import {Currentonlineuser} from "../shared/currentonlineuser.model";

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css'],
  providers: [RegistrationService, CurrentonlineuserService, AdminproductService]

})
export class UserlandingComponent implements OnInit {
  public currentUsers: any = [];
  public allProducts: any = [];
  public userAccessForm: FormGroup;
  public load = {
    requesting: false,

  }


  static userAccessForm = () => {
    return {
      email: ["", Validators.required],
      password: ["", Validators.required],
      // phonenumber: ["", Validators.required],
    }
  }

  constructor(private currentonlineuserService: CurrentonlineuserService,
              private adminproductService: AdminproductService,
              private fb: FormBuilder,
              private router:Router)
  {
    this.userAccessForm = this.fb.group(UserlandingComponent.userAccessForm());

  }

  ngOnInit() {
    // console.log('grhjk,m nb');
    this.getProducts();
  }


  //for users' login submit
  onSubmitUserAccess() {
    this.load.requesting = true;
    this.currentonlineuserService.postCurrentonlineuser(this.userAccessForm.value).subscribe(
      (res) => {
        // this.load.requesting = false;
        // this.currentUsers.push(res);
        // this.userAccessForm.reset();
        // this.router.navigate(['/productdetails',{}]);

localStorage.setItem('current_user',JSON.stringify(res));
        this.router.navigateByUrl('/userdashboard')

        // this.resetForm(form);
        // this.getProducts();
      },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }
//for users' login submit

alertNonUser(){
  alert('Please Login First!');
}

public getProducts() {
  this.adminproductService.getAdminProduct().subscribe(
    (response: any) => {
      console.log('respone gfhgfhfghhg ', response);
      this.allProducts = response;
    }, (error) => {
      console.log('Error ', error);
    });
}

}
