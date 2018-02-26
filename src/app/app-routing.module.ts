import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { DocumentListComponent } from './document-list/document-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'upload', component: UploadCsvComponent },
  { path: 'doc-list', component: DocumentListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
