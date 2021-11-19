import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, ViewChild } from '@angular/core';

const lottie: any = require('node_modules/lottie-web/build/player/lottie.js');


@Component({
  selector: 'app-lottie-animation-view',
  templateUrl: './lottie-animation-view.component.html',
  styleUrls: ['./lottie-animation-view.component.scss']
})
export class LottieAnimationViewComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    @Input() options: any;
    @Input() width: number;
    @Input() height: number;

    @Output() animCreated: any = new EventEmitter();

    @ViewChild('lavContainer') lavContainer: ElementRef;


    private _options: any;

    ngAfterViewInit() {
       //console.log('lottie component')
        if(isPlatformServer(this.platformId)){return;}
       //console.log('lottie component after', this.lavContainer.nativeElement)
        
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: this.options.renderer || 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            autoloadSegments: this.options.autoloadSegments !== false,
            animationData: this.options.animationData,
            path: this.options.path || '',
            rendererSettings: this.options.rendererSettings || {}
        };

        let anim: any = lottie.loadAnimation(this._options);
        this.animCreated.emit(anim);
    }

}
