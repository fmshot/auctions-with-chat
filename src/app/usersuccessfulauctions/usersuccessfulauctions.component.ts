import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";

import {AdminproductService} from '../shared/adminproduct.service';
import {Adminproduct} from "../shared/adminproduct.model";

declare const $: any;

@Component({
  selector: 'app-usersuccessfulauctions',
  templateUrl: './usersuccessfulauctions.component.html',
  styleUrls: ['./usersuccessfulauctions.component.css'],
  providers: [AdminproductService]

})
export class UsersuccessfulauctionsComponent implements OnInit {
  public currentUser ={};
  public allProducts: any = [];
  public productToEdit = null;
  public editorReady: boolean;
  public productsForm: FormGroup;
  public editProductsForm: FormGroup;
  public load = {
    requesting: false,
  }

  constructor(  private adminproductService: AdminproductService,
                private fb: FormBuilder) 
                { }

  ngOnInit() {
    this.getProducts();

  }


  //for complete table on init
  public getProducts() {
    this.adminproductService.getAdminProduct().subscribe(
      (response: any) => {
        console.log('respone gfhgfhfghhg ', response);
        this.allProducts = response;
      }, (error) => {
        console.log('Error ', error);
      });
  }
//for complete table on init

}
