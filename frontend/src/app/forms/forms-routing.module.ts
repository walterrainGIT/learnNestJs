import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from "./components/forms.component";

const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
    },
    /*{
        path: ':id', component: ObjectItemComponent,
    },*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRouting { }
