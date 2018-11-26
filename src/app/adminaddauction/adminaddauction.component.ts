import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


import {AuctionService} from '../shared/auction.service';
import {Auction} from "../shared/auction.model";
import {AdminproductService} from '../shared/adminproduct.service';
import {Adminproduct} from "../shared/adminproduct.model";
declare const $: any;


@Component({
  selector: 'app-adminaddauction',
  templateUrl: './adminaddauction.component.html',
  styleUrls: ['./adminaddauction.component.css'],
  providers: [AuctionService]
})
export class AdminaddauctionComponent implements OnInit {
  public currentAuction ={};
  public allAuctions: any = [];
  public allProductss: any =[];
  public auctionToEdit = null;
  // public auctionId: string;
  // public editorReady: boolean;
  public addNewAuctionsForm: FormGroup;
  // public editauctionsForm: FormGroup;
  public load = {
    requesting: false,
  }

  static addNewAuctionsForm = () => {
    return {
      auctiondate: [""],
      auctiontime: [""],
      auctionproduct: [""],
      // finalbid: [""],
      // biddate: [""],
      // bidtime: [""],
      // auctiondate: [ "", Validators.required],
      // auctiontime: [ "", Validators.required],
      // finalamountbidded: ["", Validators.required],
    }
  }
  constructor(private adminproductService: AdminproductService,
    private auctionService: AuctionService,
              private activatedRoute: ActivatedRoute,
            private fb: FormBuilder) 
            {
              this.addNewAuctionsForm = this.fb.group(AdminaddauctionComponent.addNewAuctionsForm());
             }

  ngOnInit() {
    this.getProducts();

  }

//for complete table on init
public getProducts() {
  this.adminproductService.getAdminProduct().subscribe(
    (response: any) => {
      console.log('respone gfhgfhfghhg ', response);
      this.allProductss = response;
    }, (error) => {
      console.log('Error ', error);
    });
}
//for complete table on init
  
  // { 
  //   this.addNewUsersForm = this.fb.group(AdminaddbidComponent.addNewUsersForm());
    // this.productsForm = this.fb.group(AdminproductstableComponent.productsForm());
  // }

  // ngOnInit() {
  // }

 //for submitting new auctions
 onSubmitAddNewAuctionsForm() {
  this.load.requesting = true;
  this.auctionService.postAuction(this.addNewAuctionsForm.value).subscribe(
    (res) => {
      this.load.requesting = false;
      this.allAuctions.push(res);
      this.addNewAuctionsForm.reset();

     },
    (error) => {
      this.load.requesting = false;

    },
    () => {

    });
}
//for submitting new auction
}

