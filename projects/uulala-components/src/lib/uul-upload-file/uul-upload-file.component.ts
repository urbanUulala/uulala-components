import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { uulInputImg } from '../assets/uul-input.img';
import { AbstractControl, FormControl } from '@angular/forms';
import { MessagesService } from '../services/messages.service';

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
  @Output() newErrorSizeEvent = new EventEmitter<any>();

  status:string = 'INVALID';
  nameLabel: string = '';
  maximSize : number = 2000000; // 2MB 
  // assets
  inputImages:any = uulInputImg;

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.nameLabel = this.label;
   
  }

  uploadToServer(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    console.log('target',target.files)
    if (target.files.length <= 0) return;

    if (target.files) {
      this.messagesService.firePreloader();
      this.label = target.files[0]?.name
      const file = target.files[0];
      this.maximumSize(file);
    }
  }

  maximumSize(file){
    if (file?.size > this.maximSize) {
      const sizeMb = this.maximSize / 1000000 + `${"MB"}`;
      this.status = 'INVALID';
      this.newErrorSizeEvent.emit({ error: sizeMb });
      this.messagesService.hidePreloader();
    } else this.fileReader(file)
  
  }

  fileReader(file){
    // FileReader
    this.messagesService.hidePreloader();
    this.status = file? 'VALID':'INVALID';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.newItemEvent.emit({name: this.label,file: reader.result});
    }
  }
}