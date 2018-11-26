import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import {Adminproduct} from "../shared/adminproduct.model";


import { NavbarandfooterService } from '../shared/navbarandfooter.service';
import {Navbarandfooter} from "../shared/navbarandfooter.model";


@Component({
  selector: 'app-navbarandfooter',
  templateUrl: './navbarandfooter.component.html',
  styleUrls: ['./navbarandfooter.component.css']
})
export class NavbarandfooterComponent implements OnInit {
  public currentUser ={};
  public allNav: any = [];
  public productToEdit = null;
  public editorReady: boolean;
  public productsForm: FormGroup;
  public editProductsForm: FormGroup;
  public load = {
    requesting: false,

  }

  static productsForm = () => {
    return {
      productname: ["", Validators.required],
      productcode: ["", Validators.required],
      minauctionprice: ["", Validators.required],
      description: [""],
      productimage: [""],
      auctiondate: [ "", Validators.required],
      auctiontime: [ "", Validators.required],
      // finalamountbidded: ["", Val,,idators.required],
    }
  }
  static editProductsForm = () => {
    return {
      productname: ["", Validators.required],
      productcode: ["", Validators.required],
      minauctionprice: ["", Validators.required],
      // finalamountbidded: ["", Validators.required],
    }
  }

  constructor(private navbarandfooterService: NavbarandfooterService,
              private fb: FormBuilder)
  {
    // this.productsForm = this.fb.group(NavbarandfooterService.productsForm());
    // this.editProductsForm = this.fb.group(AdminproductstableComponent.editProductsForm());
  }

  ngOnInit() {
                    this.editorReady = false;
    // this.resetForm();
    this.getNavbarandfooterdetails();

    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    console.log('Current User',this.currentUser);
  }


//for complete table on init
  public getNavbarandfooterdetails() {
    this.navbarandfooterService.getNavbarandfooter().subscribe(
      (response: any) => {
        console.log('respone gfhgfhfghhg ', response);
        this.allNav = response;
      }, (error) => {
        console.log('Error ', error);
      });
  }
//for complete table on init

  //for submitting new product
  // onSubmit() {
  //   this.load.requesting = true;
  //   this.NavbarandfooterService.postAdminproduct(this.productsForm.value).subscribe(
  //     (res) => {
  //       this.load.requesting = false;
  //       this.allProducts.push(res);
  //       this.productsForm.reset();

        // this.resetForm(form);
        // this.getProducts();

  //     },
  //     (error) => {
  //       this.load.requesting = false;

  //     },
  //     () => {

  //     });
  // }
  //for submitting new product

  // editing a product code

  public editAProduct(product: any) {
    this.productToEdit = product;
    this.editorReady = true;
    // $('#mediumModal').modal('show');
  }

  // public saveEditedProduct(){
  // this.adminproductService.putAdminProduct(this.productToEdit, this.productToEdit['_id']).subscribe(res => {
  //   console.log('Res ', res);
  // }, err => {
  //   console.log('oiuyfdfghkjl', err)
  // });
  // }
  // end editing a product

  //switching toggle
  // public toggleAdminProduct(product){
  //   product.status = (product.status.toString() == '0') ? 1 : 0;
  //   this.adminproductService.toggleAdminProduct(product).subscribe(res => {
  //     console.log('Res ', res);
  //   }, err => {
  //     console.log('oiuyfdfghkjl', err)
  //   });
  // }
  //switching toggle

}


