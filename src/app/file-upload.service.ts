import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment'; 
import { Endpoints } from './endpoints';
import { Document } from './document.model';
import { mapTo } from 'rxjs/operator/mapTo';
@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<Object> {
    let url = environment.apiUrl + Endpoints.csvEndpoint;

    let formData = new FormData();
    formData.append('upload', file);
    

    return this.http.post(url, formData);
  }

  getUploadedFiles(): Observable<Document[]> {
    let url = environment.apiUrl + Endpoints.csvEndpoint;
    return this.http.get<Document[]>(url)

  }
}
