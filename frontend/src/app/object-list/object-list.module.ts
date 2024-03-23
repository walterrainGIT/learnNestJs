import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObjectItemComponent } from './componets/item/object-item.component';
import { ObjectListComponent } from './componets/list/object-list.component';
import { ObjectListRouting } from './object-list-routing.module';


@NgModule({
    imports: [CommonModule, ObjectListRouting],
    exports: [ObjectListComponent, ObjectItemComponent],
    declarations: [ObjectListComponent, ObjectItemComponent],
    providers: [],
})
export class ObjectListModule { }
