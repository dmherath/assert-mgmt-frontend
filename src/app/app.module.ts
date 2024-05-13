import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAssertsComponent } from './components/view-asserts/view-asserts.component';
import { UpdateAssertsComponent } from './components/update-asserts/update-asserts.component';
import { AddNewAssertComponent } from './components/add-new-assert/add-new-assert.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ViewAssertsComponent,
    UpdateAssertsComponent,
    AddNewAssertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
