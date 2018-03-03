import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment'; 
import { FileUploadService } from '../file-upload.service';
import { Url } from 'url';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  csvUploadUrl: string = environment.apiUrl + environment.csvEndpoint;

  constructor(private upload: FileUploadService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.uploadFile(event.target.files);
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      return;
    }

    let file = files[0];

    this.upload.uploadFile(this.csvUploadUrl, file)
      .subscribe(
        data => {
          console.log("File uploaded!");
        },
        (err: Error) => {
          console.log("Failed upload");
        }
      )
  }
}
