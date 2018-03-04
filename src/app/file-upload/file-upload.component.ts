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
	csvUploadUrl: string = environment.apiUrl + '/wtf/csv-test';
  uploadTried: boolean;
  uploadSucceeded: boolean;
  currentFile: File;

  constructor(private upload: FileUploadService) { }

  ngOnInit() {
    this.uploadTried = false;
    this.currentFile = null;    
  }

  selectFile(event): void {
    const files: File[] = event.target.files;
    if (files.length == 0) {
      return;
    }

    this.currentFile = files[0];
  }

  onSubmit(): void {
    this.uploadFile(this.currentFile);
  }

  uploadFile(file: File): void {
    if (file === null || file === undefined) {
      return;
    }

    this.uploadTried = true;

    this.upload.uploadFile(this.csvUploadUrl, file)
      .subscribe(
        data => {
          this.uploadSucceeded = true;
          console.log("File uploaded!");
        },
        (err: Error) => {
          this.uploadSucceeded = false;
          console.log("Failed upload");
        }
      )
  }
}
