import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'utility-app';
  name = 'John Doe';
  firstName:string='Aman';
  lastName:string='Verma'

  // onFirstNameChange(firstName:string){
  //   this.firstName = firstName;
  // }
  // onLastNameChange(lastName:string){
  //   this.lastName = lastName;
  // }
}
