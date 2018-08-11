import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GoodBoyComponent } from './good-boy/good-boy.component';


@NgModule({
  declarations: [
    AppComponent,
    GoodBoyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
