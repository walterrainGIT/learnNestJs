import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'object-list',
    templateUrl: './object-list.component.html',
    styleUrl: './object-list.component.scss',
})

export class ObjectListComponent {

    constructor(private router: Router, private route: ActivatedRoute) { }

    public objects = objects;

    public redirectTo(id: number) {
        this.router.navigate([`${id}`], { relativeTo: this.route })
    }
}

export const objects: Object[] = [
    {
        title: 'perviy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 1
    },
    {
        title: 'vtoroy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 2
    },
    {
        title: 'tretiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 3
    },
    {
        title: 'chetvertiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 4
    },
    {
        title: 'pyatiy',
        content: 'Lorem Ipsumsfdhkjhmdf,fmsdkgdfmhlkhmgflkhdf;lsakflsdkg',
        id: 5
    }
]

export interface Object {
    title: string;
    content: string;
    id: number;
}
