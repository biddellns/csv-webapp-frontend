import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Document } from '../document.model';
import { FileUploadService } from '../file-upload.service';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents$; 

  constructor(private upload: FileUploadService) { }

  ngOnInit() {
    console.log('Call to upload files');
    this.documents$ = this.upload.getUploadedFiles();
    console.log(this.documents$)
  }

}
