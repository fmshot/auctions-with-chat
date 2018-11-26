import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import {Observable};
// import 'rxjs/add/operator/map';\
// import 'rxjs/add operator/toPromise';

import { Bid } from './bid.model';

@Injectable({
  providedIn: 'root'
})
export class BidService { 
  selectedBid: Bid;
  bids: Bid[];
  readonly baseURL = 'http://localhost:3000/bids';
  // URLS = {
  //   regist:'Bids',
  //   cous:'currentonlineusers'
  // }

  constructor(private http : HttpClient) { }

  postBid(bd : Bid){
    return this.http.post(this.baseURL, bd);
  }

  getBid() {
    return this.http.get(this.baseURL);
  }

 putBid(data, id) {
    return this.http.put(this.baseURL + '/' + id, data);
  } 

  getBidById(id) {
    return this.http.get(this.baseURL + '/' + id);
  }

  public toggleBid(user) {
    return this.http.put(this.baseURL + '/toggle/' + user._id,user);

  }

}

  // postCurrentonlineuser(cou : Currentonlineuser){ 
  //   const path = `${this.baseURL}${this.URLS.cous}`;
  //   return this.http.post(this.baseURL, cou);
  // }

