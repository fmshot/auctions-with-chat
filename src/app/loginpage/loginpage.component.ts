import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";

import { RegistrationService } from '../shared/registration.service'
import {AdminproductService} from '../shared/adminproduct.service';
import {Adminproduct} from "../shared/adminproduct.model";


declare const $: any;


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers: [RegistrationService, AdminproductService]
})

export class LoginpageComponent implements OnInit {
  public productsForm: FormGroup;
  public allProducts: any = [];
  public load = {
    requesting: false,

  }


  static productsForm = () => {
    return {
      // _id: ["", Validators.required],
      productname: ["", Validators.required],
      productcode: ["", Validators.required],
      minauctionprice: ["", Validators.required],
      description: [""],
      productimage: [""],
      auctiondate: [ "", Validators.required],
      auctiontime: [ "", Validators.required],
      // finalamountbidded: ["", Validators.required],
    }
  }


  constructor(private adminproductService: AdminproductService,
              private fb: FormBuilder)
  {
  this.productsForm = this.fb.group(LoginpageComponent.productsForm());


 }

  ngOnInit() {

  }

  onSubmitproductsForm() {
    this.load.requesting = true;
    this.adminproductService.postAdminproduct(this.productsForm.value).subscribe(
      (res) => {
        this.load.requesting = false;
        this.allProducts.push(res);
        this.productsForm.reset();

      },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }

  // onSubmit(form : NgForm) {
  //   this.registrationService.postRegistration(form.value).subscribe((res) => {
  //     // this.resetForm(form);
  //   });
  //  }


}
