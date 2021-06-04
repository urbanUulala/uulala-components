import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { uulInputImg } from '../assets/uul-input.img';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'uul-upload-file',
  templateUrl: './uul-upload-file.component.html',
  styleUrls: ['./uul-upload-file.component.scss']
})
export class UulUploadFileComponent implements OnInit {

  @Input() label:string = '';
  @Input() buttonLabel:string = '';

  //reactive form
  @Output() newItemEvent = new EventEmitter<any>();

  status:string = 'INVALID';

  // assets
  inputImages:any = uulInputImg;

  constructor() { }

  ngOnInit(): void {
   
  }

  uploadToServer(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    if (target.files) {
      this.label = target.files[0]?.name
      const file = target.files[0];
      this.status = file? 'VALID':'INVALID';
      // FileReader
      const  reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.newItemEvent.emit({name: this.label,file: reader.result});
      }
    }
  }
}