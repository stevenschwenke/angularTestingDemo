import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { SimpleServiceTestComponent } from './simple-service-test/simple-service-test.component';
import {GoodBoyService} from './simple-service-test/good.boy.service';
import { ComponentInputTestComponent } from './component-input-test/component-input-test.component';
import { InnerComponentComponent } from './component-input-test/inner-component/inner-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    SimpleServiceTestComponent,
    ComponentInputTestComponent,
    InnerComponentComponent
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
