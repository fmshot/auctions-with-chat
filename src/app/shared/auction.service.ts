import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Auction} from "./auction.model";


@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  selectedAuction: Auction;
  auctions:Auction[];
  readonly baseURL = 'http://localhost:3000/auctions';

  constructor(private http: HttpClient) { }


  postAuction(auc: Auction) {
    return this.http.post(this.baseURL, auc);
  }

  getAuction() {
    return this.http.get(this.baseURL);
  }

  putAuction(data, id) {
    return this.http.put(this.baseURL + '/' + id, data);
  }

  getAuctionById(id) {
    return this.http.get(this.baseURL + '/' + id);
  }

  public toggleAuction(auction) {
    return this.http.put(this.baseURL + '/toggle/' + auction._id,auction);

  }

}

