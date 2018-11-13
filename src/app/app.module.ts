import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {DemoMaterialModule} from '../module-material';

import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DatepickerExampleComponent} from './datepicker-example/datepicker-example.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,   
    DemoMaterialModule, 
    MatNativeDateModule,
    ReactiveFormsModule, 
    ],
  declarations: [ AppComponent, HelloComponent, DatepickerExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
