import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { uulInputImg } from '../assets/uul-input.img';
import { AbstractControl, FormControl } from '@angular/forms';
import { MessagesService } from '../services/messages.service';
import { UserService } from '../services';
import { StringTools } from '../utilities';

@Component({
  selector: 'uul-upload-file',
  templateUrl: './uul-upload-file.component.html',
  styleUrls: ['./uul-upload-file.component.scss']
})
export class UulUploadFileComponent implements OnInit {

  //reactive form
  @Input() control: AbstractControl = new FormControl();

  @Input() label:string = '';
  @Input() buttonLabel:string = '';

  @Input() errorSizeMessage:string =  'The file must be less than';

  //reactive form
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newErrorSizeEvent = new EventEmitter<any>();

  status:string = 'INVALID';
  nameLabel: string = '';
  maximSize : number = 7000000; // 2MB 
  @Input() containerCss: string = '';
  @Input() bgBtnCss: any = { backgroundColor: 'var(--color-highlighted)', color: 'var(--color-text)'};

  // assets
  inputImages:any = uulInputImg;
  
  containerStyles:any = {
    'container__upload': true
  }
  buttonStyles:any = {

    'file-input': true
  }
  

  constructor(
    private messagesService: MessagesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.nameLabel = this.label;
   this.loadStyles();
  }

  loadStyles() {
    this.containerStyles[this.containerCss] = this.containerCss != '';
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
      this.errorSize({ error: sizeMb });
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
      this.uploadFile({name: this.label,file: reader.result});
    }
  }

  errorSize(newError: any) {
    this.messagesService.fireErrorMessage('Error', `${this.errorSizeMessage} ${newError.error}`);
    this.control.setValue('');
  }

  uploadFile(newItem: any) {
   
    this.messagesService.firePreloader();
    let fileName:string = newItem?.name;
    this.userService.setFile(`${StringTools.generateNewRandomString(9)}-${fileName}`, `${newItem?.file.split(',')[1]}`).subscribe(data => {
      this.control.setValue(data);
      this.messagesService.hidePreloader();
    },
    () => {
      this.messagesService.fireErrorMessage('Error', 'File upload failed, try again')
    });
   
  }
}