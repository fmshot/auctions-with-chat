import { Component, OnInit } from '@angular/core';

import {AdminproductService} from '../shared/adminproduct.service';
import {Adminproduct} from "../shared/adminproduct.model";

declare const $: any;


@Component({
  selector: 'app-admineditproducts',
  templateUrl: './admineditproducts.component.html',
  styleUrls: ['./admineditproducts.component.css'],
  providers: [AdminproductService]
})
export class AdmineditproductsComponent implements OnInit {
  public allProducts: any = [];
  public productToEdit = null;
  public editorReady: boolean;

  constructor(private adminproductService: AdminproductService) { }

  ngOnInit() {
    this.editorReady = false;
    this.getProducts();

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
//for complete table on init

  public editAProduct(product: any) {
    this.productToEdit = product;
    this.editorReady = true;
    // $('#mediumModal').modal('show');
  }

  public saveEditedProduct(){
  this.adminproductService.putAdminProduct(this.productToEdit, this.productToEdit['_id']).subscribe(res => {
    console.log('Res ', res);
  }, err => {
    console.log('oiuyfdfghkjl', err)
  });
  }




}
