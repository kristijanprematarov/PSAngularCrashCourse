import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter();
  model;

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  createEntry() {
    let newEntry = Object.assign({},this.model,{
      bodyfat: this.model.bodyfat,
      date: new Date(this.model.date)
    })
    this.create.emit(newEntry);
  }

  resetForm(){
    this.model = {};
  }
}
