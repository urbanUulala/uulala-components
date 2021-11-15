import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { MenuModel } from "../models/getters/menu.model";



@Component({
    selector: 'app-row-menu',
    templateUrl: './rowmenu.component.html',
    styleUrls: ['./rowmenu.component.scss']
})
export class RowMenuComponent implements OnInit{
    @Input() data:MenuModel;
    @Input() isChild:boolean = false;
    @Input() father:MenuModel;
    @Output() closeMenusEvent:EventEmitter<any> = new EventEmitter<any>();
    @Output() selectChild:EventEmitter<MenuModel> = new EventEmitter<MenuModel>();
    @Output() selectFather: EventEmitter<MenuModel> = new EventEmitter<MenuModel>();
    detailExpanded:boolean = false;
    constructor(
        private router: Router
    ){
        
    }

    ngOnInit(){
        //this.utilService.debugMessage(true, 'data in row menu', this.data);
        this.data.urlV2 = this.data.urlV2.toString().trim();

        if(!this.isChild) this.data.fatherSelect = false;
        else this.data.childSelect = false;

        this.initSelection(); 
    }

    initSelection() {
        let currentPath:string = this.router.url;
        // console.log( 'current path', currentPath );
        if(!this.isChild) {
            if(this.data?.childs?.filter(child => child.urlV2.trim() === currentPath).length !== 0) {
                this.data.detailExpanded = true;
                this.data.fatherSelect = true;
            }

            if(this.data.urlV2.trim() == currentPath) this.data.fatherSelect = true;
        }
        else {
            if(this.data.urlV2 == currentPath) this.data.childSelect = true;
        }
        
    }

    expandDetail() {
        if(this.data?.childs?.length == 0) this.data.detailExpanded = false;
        else this.data.detailExpanded = true;
        //this.utilService.debugMessage(true, 'data in row expand', this.data);
        this.closeMenusEvent.emit(this.data);
    }

    routerLink() {
        // console.log('father', this.father)
        if(this.father?.description != '') {
            this.selectFather.emit(this.father);
            if(this.father) this.father.fatherSelect = true;
            //this.utilService.debugMessage(true, 'Data in routerLink Action', this.data, this.father);
        }
        else {
            this.selectFather.emit(this.data);
        }
        
        if(this.isChild) {
            this.data.childSelect = true;
        }
        else {
            this.data.fatherSelect = true;
        }
        
        this.selectChild.emit(this.data);
        this.router.navigate([this.data.urlV2])
        this.expandDetail();
    }

    selectChildEvent(event) {
        this.data.childs.forEach(child => {
            if(child.description != event.description) {
                child.childSelect = false
            }
        });
    }

    fatherEvent(event) {
        this.selectFather.emit(event);
    }
}