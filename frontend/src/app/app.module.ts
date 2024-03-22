import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorModule} from "./calculator/calculator.module";
import { NavigationComponent} from './components/navigation/navigation.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { ObjectListComponent } from './object-list/component/object-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmptyRouteComponent,
    ObjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
