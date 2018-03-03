import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(url: string, file: File): Observable<Object> {
    let formData = new FormData();
    formData.append('upload', file);
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'text/csv');

    const options = {
      headers: headers,
    };

    return this.http.post(url, formData, options);
  }
}
