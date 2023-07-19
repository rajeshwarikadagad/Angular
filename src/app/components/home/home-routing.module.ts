import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TableListsComponent } from './table-lists/table-lists.component';
import { UserListComponent } from './user-list/user-list.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';

const routes: Routes = [ 
  {path: '', redirectTo:'programs', pathMatch:'full'},
  {path: 'programs', component: MyProgramsComponent},
  {path: 'table-list', component: TableListsComponent},
  {path: 'user-list', component: UserListComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class HomeRoutingModule { }
