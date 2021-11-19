import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { NgScrollbar } from 'ngx-scrollbar';



@Component({
  selector: 'uul-terms',
  templateUrl: './uul-terms.component.html',
  styleUrls: ['./uul-terms.component.scss']
})
export class UulTermsComponent implements OnInit, AfterViewInit {
  @Input() title:string;
  @Input() content:string;
  @Input() labelCheck:string;

  @Input() showLottieScroll:boolean = true;

  //reactive form
  @Input() control: AbstractControl = new FormControl();

  //metadataGridScroll
  @ViewChild(NgScrollbar) scrollbarRef: NgScrollbar;

  // Functionality
  showCheck:boolean = false;

  options = {
    path: 'https://uulala-public.s3.us-west-2.amazonaws.com/lottie/scroll-down.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
};





  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() : void {
    this.initScrollEvents();
  }

  initScrollEvents() {

    setTimeout(() => {

        if (this.scrollbarRef == undefined) {
            this.initScrollEvents();
            return;
        }
       //console.log('scroll ref', this.scrollbarRef);
        this.scrollbarRef.scrolled.subscribe(e => {
            let pos = e.target.scrollTop + e.target.clientHeight;
            let max = e.target.scrollHeight;
            if (pos >= max) {
              this.showCheck = true;
              this.showLottieScroll = false;
            }
        })

    }, 500);
}

  

}
