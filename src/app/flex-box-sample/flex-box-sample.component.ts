import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flex-box-sample',
  templateUrl: './flex-box-sample.component.html',
  styleUrls: ['./flex-box-sample.component.css']
})
export class FlexBoxSampleComponent {
  title = "FlexBoxSampleComponent";
  address = '1342 N Alvarado St, Los Angeles CA 90026';
  name = "Mark Smith";
  faSearch = faSearch;

}
