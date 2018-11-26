import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {AdminproductService} from "../shared/adminproduct.service";

@Component({
  selector: 'app-userproductdetails',
  templateUrl: './userproductdetails.component.html',
  styleUrls: ['./userproductdetails.component.css'],
  providers: [AdminproductService]
})
export class UserproductdetailsComponent implements OnInit {

  private vieweddProduct: any = null;
  private productId: string;

  constructor(private activeRoute: ActivatedRoute, private adminService: AdminproductService) {
    activeRoute.params.subscribe(param => {
      this.productId = param.id;
      this.getProductById();

      console.log('Params ', param)
    })
  }

  ngOnInit() {
  }

  public getProductById() {
    this.adminService.getAdminProductById(this.productId).subscribe(
      (response: any) => {
        console.log('respone gfhgfhfghhg ', response);
        this.vieweddProduct = response;
      },
      (error) => {
        console.log('Error ', error);
      });
  }

}
