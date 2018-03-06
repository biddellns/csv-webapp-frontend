import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment'; 
import { Endpoints } from './endpoints';
import { Document } from './document.model';
import { mapTo } from 'rxjs/operator/mapTo';
import { Url } from 'url';

@Injectable()
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocumentDetail(id: number): Observable<any> {
    const url = `${environment.apiUrl}${Endpoints.csvEndpoint}${id}/get_data`
    return this.http.get(url);
  }

}
