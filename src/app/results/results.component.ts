import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Results from "./results";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() data!: Results;
  @Output() searchByPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
}
