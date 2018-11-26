import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


import {BidService} from '../shared/bid.service';
import {Bid} from "../shared/bid.model";
declare const $: any;

@Component({
  selector: 'app-adminbidstable',
  templateUrl: './adminbidstable.component.html',
  styleUrls: ['./adminbidstable.component.css'],  
  providers: [BidService]

})
export class AdminbidstableComponent implements OnInit {
  public allBids: any = [];
  public currentUser ={};
  public allUserss: any = [];
  public bidsToEdit = null;
  public userId: string;
  // public editorReady: boolean;
  public addNewUsersForm: FormGroup;
  public editusersForm: FormGroup;
  public load = {
    requesting: false,
  }

 
  constructor(private bidService: BidService,
    private fb: FormBuilder)
{

}

  ngOnInit() {
    // this.editorReady = false;
    // this.resetForm();
    this.getbids();

    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    console.log('Current User',this.currentUser);
  }


//for complete table on init
public getbids() {
  this.bidService.getBid().subscribe(
    (response: any) => {
      console.log('respone gfhgfhfghhg ', response);
      this.allBids = response;
    }, (error) => {
      console.log('Error ', error);
    });
}
//for complete table on init




//switching toggle
public toggleRegistration(user){
  user.status = (user.status.toString() == '0') ? 1 : 0;
  this.bidService.toggleBid(user).subscribe(res => {
    console.log('Res ', res);
  }, err => {
    console.log('oiuyfdfghkjl', err)
  });
}
//switching toggle




}


