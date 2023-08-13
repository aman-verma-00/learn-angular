import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.scss']
})
export class CalcResultsComponent {
  @Input()
  first:string='';
  @Input()
  second:string='';
  @Input()
  ops:string='';
  @Input()
  ans:string='';
}
