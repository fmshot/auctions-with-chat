import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


import {RegistrationService} from '../shared/registration.service';
import {Registration} from "../shared/registration.model";
declare const $: any;


@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css'],
  providers: [RegistrationService]

})
export class AdminadduserComponent implements OnInit {
  public currentUser ={};
  public allUserss: any = [];
  public userToEdit = null;
  public userId: string;
  // public editorReady: boolean;
  public addNewUsersForm: FormGroup;
  public editusersForm: FormGroup;
  public load = {
    requesting: false,
  }


  static addNewUsersForm = () => {
    return {
      firstname: [""],
      lastname: [""],
      email: [""],
      pasword: [""],
      phonenumber: [""],
      // auctiondate: [ "", Validators.required],
      // auctiontime: [ "", Validators.required],
      // finalamountbidded: ["", Validators.required],
    }
  }

  constructor(private registrationService: RegistrationService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder)  
  
  { 
    this.addNewUsersForm = this.fb.group(AdminadduserComponent.addNewUsersForm());
    // this.productsForm = this.fb.group(AdminproductstableComponent.productsForm());
  }

  ngOnInit() {
  }


 //for submitting new user
 onSubmitAddNewUsersForm() {
  this.load.requesting = true;
  this.registrationService.postRegistration(this.addNewUsersForm.value).subscribe(
    (res) => {
      this.load.requesting = false;
      this.allUserss.push(res);
      this.addNewUsersForm.reset();

     },
    (error) => {
      this.load.requesting = false;

    },
    () => {

    });
}
//for submitting new user
}
