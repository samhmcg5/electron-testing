import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule } from '@angular/forms';
import { ParentComponent } from './parent.component';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ParentComponent, LoginComponent],
  bootstrap: [ParentComponent, LoginComponent]
})

export class ParentModule {}
