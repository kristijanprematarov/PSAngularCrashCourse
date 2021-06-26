import { IdentityService } from '../services/identity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
  }

  login() {
    this.identitySvc.loggedIn = true;
  }

  logout() {
    this.identitySvc.loggedIn = false;
  }

}
