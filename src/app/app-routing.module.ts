import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvFileUploadComponent } from './csv-file-upload/csv-file-upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/csv-processing', pathMatch: 'full' },
  {
    path: 'csv-processing',
    component: CsvFileUploadComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
