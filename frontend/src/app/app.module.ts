import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorModule} from "./calculator/calculator.module";
import { NavigationComponent} from './components/navigation/navigation.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import {DirectiveModule} from "./directive/directive.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
