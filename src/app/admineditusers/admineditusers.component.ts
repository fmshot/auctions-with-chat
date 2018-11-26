import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


import {RegistrationService} from '../shared/registration.service';
import {Registration} from "../shared/registration.model";
declare const $: any;


@Component({
  selector: 'app-admineditusers',
  templateUrl: './admineditusers.component.html',
  styleUrls: ['./admineditusers.component.css'],
  providers: [RegistrationService]

})
export class AdmineditusersComponent implements OnInit {
   
  public currentUser ={};
  public allUsers: any = [];
  public userToEdit = null;
  public userId: string;
  // public editorReady: boolean;
  public usersForm: FormGroup;
  public editusersForm: FormGroup;
  public load = {
    requesting: false,

  }

  static usersForm = () => {
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
  // static usersForm = () => {
  //   return {
  //     firstname: ["", Validators.required],
  //     surname: ["", Validators.required],
  //     email: ["", Validators.required],
  //     pasword: [""],
      // finalamountbidded: ["", Validators.required],
  //   }
  // }

  constructor(private registrationService: RegistrationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder)
{
this.usersForm = this.fb.group(AdmineditusersComponent.usersForm());
// this.editusersForm = this.fb.group(AdmineditusersComponent.editusersForm());
}

  ngOnInit() {
    // this.editorReady = false;
    // this.resetForm();
    // this.editAUser();
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.getUserById(this.userId);
    // this.getusers();

    // this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    // console.log('Current User',this.currentUser);
  }

  private getUserById (user_id) {
    this.registrationService.getRegistrationById(user_id).subscribe(
    (response: any) => {
      console.log('userrrrrr', response);
      this.userToEdit = response;
      this.usersForm.patchValue(response);
    }, 
    (error) => {
      console.log('Error', error);
    })
  } 
//for complete table on init
  // public getusers() {
  //   this.registrationService.getRegistration().subscribe(
  //     (response: any) => {
  //       console.log('respone gfhgfhfghhg ', response);
  //       this.allUsers = response;
  //     }, (error) => {
  //       console.log('Error ', error);
  //     });
  // }
//for complete table on init

  //for submitting new user
  // onSubmitEditedUser() {
  //   this.load.requesting = true;
  //   this.registrationService.putRegistration(this.usersForm.value).subscribe(
  //     (res) => {
  //       this.load.requesting = false;
  //       this.allUsers.push(res);
  //       this.usersForm.reset();

        // this.resetForm(form);
        // this.getProducts();

  //     },
  //     (error) => {
  //       this.load.requesting = false;

  //     },
  //     () => {

  //     });
  // }
  //for submitting new user
  // putRegistration(data, id) {
  //   return this.http.put(this.baseURL + '/' + id, data);
  // }

  onSubmitEditedUser() {
    this.load.requesting = true;
    this.registrationService.putRegistration(this.usersForm.value, this.userToEdit['_id']).subscribe(
      (res) => {
        this.load.requesting = false;
        this.allUsers.push(res);
        this.usersForm.reset();

       },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }





  // editing a product code

  public editAUser(user: any) {
    this.userToEdit = user;
    // this.editorReady = true;
    // $('#mediumModal').modal('show');
  }

  public saveEditedUser(){
    // alert('who are you');
  this.registrationService.putRegistration(this.userToEdit, this.userToEdit['_id']).subscribe(res => {
    console.log('Res ', res);
  }, err => {
    console.log('oiuyfdfghkjl', err)
  });
  }
  // end editing a product

  //switching toggle
  public toggleRegistration(user){
    user.status = (user.status.toString() == '0') ? 1 : 0;
    this.registrationService.toggleRegistration(user).subscribe(res => {
      console.log('Res ', res);
    }, err => {
      console.log('oiuyfdfghkjl', err)
    });
  }
  //switching toggle

}


