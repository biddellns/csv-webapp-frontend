import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment'; 
import { Document } from './document.model';
import { mapTo } from 'rxjs/operator/mapTo';
@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<Object> {
    let url = environment.apiUrl + environment.newCsvEndpoint;
    let formData = new FormData();
    formData.append('upload', file);
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'text/csv');
    headers.append('Content-Disposition', file.name);
    const options = {
      headers: headers,
    };

    return this.http.put(url, formData, options);
  }

  getUploadedFiles(): Observable<Document[]> {
    let url = environment.apiUrl + environment.csvEndpoint;
    return this.http.get<Document[]>(url)

  }
}
