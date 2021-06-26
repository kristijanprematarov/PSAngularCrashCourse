import { IdentityService } from './services/identity.service';
import { Component } from '@angular/core';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
  }

}
