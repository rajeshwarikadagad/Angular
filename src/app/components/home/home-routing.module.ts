import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TableListsComponent } from './table-lists/table-lists.component';

const routes: Routes = [ 
  // {path: '', component: TableListsComponent},
    {path: 'table-list', component: TableListsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class HomeRoutingModule { }
