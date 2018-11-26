import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";



import { RegistrationService } from '../shared/registration.service'
import {Registration} from "../shared/registration.model";
// import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
  providers: [RegistrationService]
})
export class RegisterpageComponent implements OnInit {
  public registrationForm: FormGroup;
  public allUsers : any = [];
  public load = {
    requesting: false,

  }



  static registrationForm = () => {
    return {
      firstname: [""],
      lastname: [""],
      email: [""],
      password: [""],
      phonenumber: [""]
    }
  }

  constructor (private registrationService: RegistrationService,
               private fb: FormBuilder)
  {
    this.registrationForm = this.fb.group(RegisterpageComponent.registrationForm());
  }

  ngOnInit() {
  }



  //for submitting new user
  onSubmitRegistrationForm() {
    this.load.requesting = true;
    this.registrationService.postRegistration(this.registrationForm.value).subscribe(
      (res) => {
        this.load.requesting = false;
        this.allUsers.push(res);
        this.registrationForm.reset();

        // this.resetForm(form);
        // this.getProducts();

      },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }
  //for submitting new user

}

