import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  firstNo:string='';
  secondNo:string='';
  operation:string='';
  ans:string='';

  onCalculate(data:any){
    this.firstNo = data.firstNo;
    this.secondNo = data.secondNo;
    this.operation = data.operation;
    this.ans = data.ans;
  }
}
