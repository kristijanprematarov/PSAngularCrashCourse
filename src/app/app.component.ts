import { Component } from '@angular/core';
import { WeightEntriesService } from './services/weight-entries.service';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(public entriesService: WeightEntriesService) {}

  ngOnInit() {
  }
  
}
