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

  documents$: Observable<Document[]>; 

  selectedDocument: Document

  constructor(private upload: FileUploadService) { }

  ngOnInit() {
    this.documents$ = this.upload.getUploadedFiles();
  }

  onSelect(document: Document): void {
    this.selectedDocument = document;
  }

}
