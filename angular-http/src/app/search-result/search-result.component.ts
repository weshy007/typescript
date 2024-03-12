import {Component, Input} from '@angular/core';
import {SearchResult} from "../youtube-search/search-result.model";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() result: SearchResult | undefined;

  constructor() {
  }

  ngOnInit() {}
}
