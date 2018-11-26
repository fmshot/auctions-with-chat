import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";


import {AuctionService} from '../shared/auction.service';
import {Auction} from "../shared/auction.model";

declare const $: any;


@Component({
  selector: 'app-adminauctionstable',
  templateUrl: './adminauctionstable.component.html',
  styleUrls: ['./adminauctionstable.component.css'],
  providers: [AuctionService]
})
export class AdminauctionstableComponent implements OnInit {
  public currentAuction ={};
  public allAuctions: any = [];
  public auctionsToEdit = null;
  public editorReady: boolean;
  public auctionsForm: FormGroup;
  public editAuctionsForm: FormGroup;
  public load = {
    requesting: false,
  }
  constructor(private auctionService: AuctionService,
              private fb: FormBuilder) 
  { }

  ngOnInit() {
    this.editorReady = false;
    this.getauctions();
    this.currentAuction = JSON.parse(localStorage.getItem('current_user'));
    console.log('Current User',this.currentAuction);
  }
  //for complete table on init
  public getauctions() {
    this.auctionService.getAuction().subscribe(
      (response: any) => {
        console.log('respone gfhgfhfghhg ', response);
        this.allAuctions = response;
      }, (error) => {
        console.log('Error ', error);
      });
  }
//for complete table on init



 
  
//for complete table on init

  //for submitting new product
  // onSubmit() {
  //   this.load.requesting = true;
  //   this.registrationService.postRegistration(this.productsForm.value).subscribe(
  //     (res) => {
  //       this.load.requesting = false;
  //       this.allUsers.push(res);
  //       this.productsForm.reset();

  //       this.resetForm(form);
  //       this.getProducts();

  //     },
  //     (error) => {
  //       this.load.requesting = false;

  //     },
  //     () => {

  //     });
  // }
  //for submitting new product

  // putRegistration(data, id) {
  //   return this.http.put(this.baseURL + '/' + id, data);
  // }

  // editing a product code

  // public editAProduct(user: any) {
  //   this.usersToEdit = user;
  //   this.editorReady = true;
  //   $('#mediumModal').modal('show');
  // }

  // public saveEditedProduct(){
  // this.registrationService.putRegistration(this.usersToEdit, this.usersToEdit['_id']).subscribe(res => {
  //   console.log('Res ', res);
  // }, err => {
  //   console.log('oiuyfdfghkjl', err)
  // });
  // }
  // end editing a product

  //switching toggle
  // public toggleRegistration(user){
  //   user.status = (user.status.toString() == '0') ? 1 : 0;
  //   this.registrationService.toggleRegistration(user).subscribe(res => {
  //     console.log('Res ', res);
  //   }, err => {
  //     console.log('oiuyfdfghkjl', err)
  //   });
  // }
  //switching toggle


  // public toggleAdminProduct(product){
  //   product.status = (product.status.toString() == '0') ? 1 : 0;
  //   this.adminproductService.toggleAdminProduct(product).subscribe(res => {
  //     console.log('Res ', res);
  //   }, err => {
  //     console.log('oiuyfdfghkjl', err)
  //   });
  // }

}




