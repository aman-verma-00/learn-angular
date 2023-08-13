import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent {
  firstNo: string = '';
  secondNo: string = '';
  operation: string = '';
  ans: string = '';

  @Output()
  calc: EventEmitter<any> = new EventEmitter();

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

    this.calc.emit({
      firstNo : this.firstNo,
      secondNo : this.secondNo,
      operation : this.operation,
      ans,
    });

  }
}
