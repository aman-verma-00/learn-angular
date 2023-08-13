import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  firstNo: string = '';
  secondNo: string = '';
  operation: string = '';
  ans: string = '';
  calculate() {
    let ans: number;
    switch (this.operation) {
      case '+':
        ans = parseInt(this.firstNo) + parseInt(this.secondNo);
        break;
      case '-':
        ans = parseInt(this.firstNo) - parseInt(this.secondNo);
        break;
      case '*':
        ans = parseInt(this.firstNo) * parseInt(this.secondNo);
        break;
      case '/':
        ans = parseInt(this.firstNo) / parseInt(this.secondNo);
        break;
      default :
      ans = 0;
    }
    this.ans=ans.toString();
  }
}
