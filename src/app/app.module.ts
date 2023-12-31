import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { TodosComponent } from './todos/todos.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcResultsComponent,
    CalcFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
