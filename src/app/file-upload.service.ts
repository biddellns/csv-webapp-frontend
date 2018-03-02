import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(url: string, file: File): Observable<HttpEvent<any>> {
    let formData = new FormData();
    
    let params = new HttpParams();

    formData.append('upload', file);

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);

    return this.http.request(req);
  }

}
