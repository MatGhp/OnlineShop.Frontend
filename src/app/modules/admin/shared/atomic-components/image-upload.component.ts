import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'os-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }
  @ViewChild('dropZone') dropZone;
  @ViewChild('uploadForm') uploadForm;
  @ViewChild('uploadFiles') uploadFiles;

  startUpload(files) {
  console.log(files)
}

  ngOnInit() {
  }

}
