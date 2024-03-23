import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { Object, objects } from '../list/object-list.component';

@Component({
    selector: 'my-object-item',
    templateUrl: './object-item.component.html',
    styleUrl: './object-item.component.scss'
})

export class ObjectItemComponent implements OnInit {

    public object?: Object

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.object = objects[params['id'] - 1]
        })
    }
}
