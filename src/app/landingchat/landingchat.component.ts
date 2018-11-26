import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';


@Component({
  selector: 'app-landingchat',
  templateUrl: './landingchat.component.html',
  styleUrls: ['./landingchat.component.css']
})
export class LandingchatComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit() {
  }

}


// import { Component } from '@angular/core';
// import { ChatService } from './services/chat.service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'auctions';
//   constructor(public chatService: ChatService) {
//   }

// }