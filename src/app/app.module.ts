import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    CalcResultsComponent
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
