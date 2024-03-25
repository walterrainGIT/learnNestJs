import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/components/calculator.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";
import {LifeCycleModule} from "./lifecycle/life-cycle.module";

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
    loadChildren: () => import('./directive/directive.module').then((m) => m.DirectiveModule)
  },
  {
    path: 'lifeCycle',
    loadChildren: () => import('./lifecycle/life-cycle.module').then((m) => m.LifeCycleModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then((m) => m.RequestsModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipeModule)
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
