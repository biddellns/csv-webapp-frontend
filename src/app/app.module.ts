import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { FileUploadService } from './file-upload.service';
import { DocumentService } from './document.service';
import { DocumentDetailComponent } from './document-detail/document-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    UploadCsvComponent,
    DocumentListComponent,
    FileUploadComponent,
    DocumentDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FileUploadService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
