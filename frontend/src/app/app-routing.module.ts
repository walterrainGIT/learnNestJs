import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/components/calculator.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";
import {DirectiveComponent} from "./directive/components/directive.component";

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: '', redirectTo: 'calculator', pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.ObjectListModule),
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
