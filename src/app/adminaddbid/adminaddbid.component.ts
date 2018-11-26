import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


import {BidService} from '../shared/bid.service';
import {Bid} from "../shared/bid.model";
declare const $: any;

@Component({
  selector: 'app-adminaddbid',
  templateUrl: './adminaddbid.component.html',
  styleUrls: ['./adminaddbid.component.css'],
  providers: [BidService]
})
export class AdminaddbidComponent implements OnInit {
  public currentUser ={};
  public allBids: any = [];
  public bidToEdit = null;
  public userId: string;
  // public editorReady: boolean;
  public addNewBidsForm: FormGroup;
  public editbidsForm: FormGroup;
  public load = {
    requesting: false,
  }

  static addNewBidsForm = () => {
    return {
      userid: [""],
      auctionid: [""],
      finalbid: [""],
      biddate: [""],
      bidtime: [""],
      // auctiondate: [ "", Validators.required],
      // auctiontime: [ "", Validators.required],
      // finalamountbidded: ["", Validators.required],
    }
  }


  constructor(private bidService: BidService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder)  
  {
    this.addNewBidsForm = this.fb.group(AdminaddbidComponent.addNewBidsForm());

   }

  ngOnInit() {
  }


  
  // { 
  //   this.addNewUsersForm = this.fb.group(AdminaddbidComponent.addNewUsersForm());
    // this.productsForm = this.fb.group(AdminproductstableComponent.productsForm());
  // }

  // ngOnInit() {
  // }


 //for submitting new user
 onSubmitAddNewBidsForm() {
  this.load.requesting = true;
  this.bidService.postBid(this.addNewBidsForm.value).subscribe(
    (res) => {
      this.load.requesting = false;
      this.allBids.push(res);
      this.addNewBidsForm.reset();

     },
    (error) => {
      this.load.requesting = false;

    },
    () => {

    });
}
//for submitting new user
}
