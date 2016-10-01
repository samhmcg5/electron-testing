import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule } from '@angular/forms';
import { ParentComponent } from './parent.component';
import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ParentComponent, AppComponent],
  bootstrap: [ParentComponent, AppComponent]
})

export class ParentModule {}
