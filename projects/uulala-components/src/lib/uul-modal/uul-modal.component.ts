import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalTypes } from '../models/types';
import { ModalService } from '../services/modal.services';





@Component({
  selector: 'uul-modal',
  templateUrl: './uul-modal.component.html',
  styleUrls: ['./uul-modal.component.scss']
})
export class UulModalComponent implements OnInit, AfterViewInit {

  @Input() id: string;
  @Input() type: ModalTypes = 'form';
  @Input() autoClose: boolean = true;
  private element: any;


  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
    this.element.style.display = 'none';
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);
    

    // close modal on background click
    if (this.autoClose)
      this.element.addEventListener('click', el => {
        if (el.target.className === 'uul-modal') {
          this.close();
        }
      });
    

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    this.element.style.animationName = 'entrada';
    this.element.style.animationDuration = '0.5s';
    this.element.style.animationFillMode = 'forwards';
    document.body.classList.add('uul-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    this.element.style.animationName = 'salida';
    this.element.style.animationDuration = '0.3s';
    this.element.style.animationFillMode = 'forwards';
    document.body.classList.remove('uul-modal-open');
  }



}
