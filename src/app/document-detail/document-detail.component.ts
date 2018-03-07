import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';

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
  data$: string[] = new Array<string>();
  headers: string[] = new Array<string>();

  constructor(private docService: DocumentService) { }

  ngOnChanges() {
    if (this.document) {
      this.getDataForDocument();
    }
  }

  getDataForDocument(): void {
    this.docService.getDocumentDetail(this.document.pk)
      .subscribe(
        res => {
          this.data$ = res;

          const first_obj = res[0];

          let currData: Array<any> = new Array<any>();

          for (let obj of res) {
            let curr_obj_data = new Array<any>();
            for (let field in obj) {
              curr_obj_data.push(obj[field]);
            }
            currData.push(curr_obj_data);
          }
          this.data$ = currData;

          for (let header in first_obj) {
              this.headers.push(header);             
          }
        }
      );
  }
};

