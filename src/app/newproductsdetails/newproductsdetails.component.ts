import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminproductService} from "../shared/adminproduct.service";

@Component({
  selector: 'app-newproductsdetails',
  templateUrl: './newproductsdetails.component.html',
  styleUrls: ['./newproductsdetails.component.css'],
  providers: [AdminproductService]

})
export class NewproductsdetailsComponent implements OnInit {

  private viewedProduct: any = null;
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
        this.viewedProduct = response;
      },
      (error) => {
        console.log('Error ', error);
      });
  }

}
