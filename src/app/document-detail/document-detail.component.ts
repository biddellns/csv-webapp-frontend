import { Component, OnChanges, Input } from '@angular/core';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnChanges {

  @Input()
  document: Document
  data: Object[];
  headers: string[];

  constructor(private docService: DocumentService) { }

  ngOnChanges() {
    this.getDataForDocument();
  }

  getDataForDocument(): void {
    this.docService.getDocumentDetail(this.document.pk)
        .subscribe(
          data => { 
            this.data = data;
            console.log(this.data.keys()) }
        );
  }
  
  getHeaders(): void {

  }

}
