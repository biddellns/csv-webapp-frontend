import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { FileUploadService } from '../file-upload.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

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

    this.upload.uploadFile("https://nicbiddell.com/api/csv-uploads/", file)
      .subscribe(
        event => {
          if (event.type == HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone} loaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('file loaded');
          }
        },
        (err: Error) => {
          console.log("Upload error: ", err);
        }, () => {
          console.log("Upload done");
        }
      )
  }
}
