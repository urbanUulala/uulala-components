import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


import { BreadItemModel } from '../models/config/breaditem.model';
import { BreadcrumConfigModel } from '../models/getters/breadcrum.model';

@Component({
    selector: 'app-breadcrum',
    templateUrl: './breadcrum.component.html',
    styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit, AfterViewInit {

    subscriptions: Subscription[] = [];

    zindex: number = 0;

    @Input() breadcrumConfig: BreadcrumConfigModel

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        
        // this.subscriptions.push(
        //   this.store.select('ui').subscribe(({ breadcrum }) => this.breadcrumConfig = breadcrum )
        // );

        // GET BRAND INFO
        //  this.subscriptions.push(
        //   this.store.select('ui').subscribe(({ brand }) => {
        //     if(!brand) return;
        //     this.brandInfo = brand;

        //   })
        // );
    }

    ngAfterViewInit() : void {
    
    }

    goToMenu(bread: BreadItemModel) {
        if (bread?.selected) return;
        this.router.navigate([bread?.url]);
    }

}
