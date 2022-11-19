import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  flashSubmit(): void {
    document.querySelector('#search_button')!.dispatchEvent(new Event('mouseenter'));
  }
}
