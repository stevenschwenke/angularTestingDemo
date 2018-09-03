import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { SimpleServiceTestComponent } from './simple-service-test/simple-service-test.component';
import {GoodBoyService} from './simple-service-test/good.boy.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    SimpleServiceTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GoodBoyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
