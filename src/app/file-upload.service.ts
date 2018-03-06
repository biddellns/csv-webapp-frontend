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
export class FileUploadService {

  endpointUrl: string = environment.apiUrl + Endpoints.csvEndpoint;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<Object> {

    let formData = new FormData();
    formData.append('upload', file);
    

    return this.http.post(this.endpointUrl, formData);
  }

  getUploadedFiles(): Observable<Document[]> {
    return this.http.get<Document[]>(this.endpointUrl)
  }
}
