import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectItemComponent } from './componets/item/object-item.component';
import { ObjectListComponent } from './componets/list/object-list.component';

const routes: Routes = [
    {
        path: '',
        component: ObjectListComponent,
    },
    {
        path: ':id', component: ObjectItemComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObjectListRouting { }
