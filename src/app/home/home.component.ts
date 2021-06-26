import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { WeightEntriesService } from '../services/weight-entries.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat = true;
  entries: Entry[];

  constructor(public entriesService: WeightEntriesService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.entriesService.getEntries()
      .subscribe(entries => {
        this.entries = entries;
      })
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    this.entriesService.addEntry(entry)
      .subscribe(() => {
        this.updateData();
      });
  }
}
