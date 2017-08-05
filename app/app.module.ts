import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './app.FormComponent';
import { sampleNgComponent } from './app.sampleNgComponent';
import { HeroDetailComponent } from './app.inputComponent';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FormComponent, sampleNgComponent, HeroDetailComponent],
  bootstrap: [AppComponent, FormComponent, sampleNgComponent]
})
export class AppModule { }
