import { Component, OnInit, Input } from "@angular/core";
import { MenuModel } from "../models/getters/menu.model";



@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

    showBanners:boolean;
    @Input() menus:MenuModel[] = [];
    @Input() detailExpanded:boolean = true;
    constructor(){

    }

    ngOnInit(){}

    closeEvent(event) {
        this.menus.forEach(menu => {
            if(menu.description != event.description) {
                menu.detailExpanded = false;
            }
        });
    }

    fatherSelect(event) {
        //this.utilService.debugMessage(true, 'Father event', this.menus, event);
        this.menus.forEach(menu => {
            if(menu?.description != event?.description) {
                menu.fatherSelect = false;
            }
        });
    }
}

//*#*#4636#*#*
