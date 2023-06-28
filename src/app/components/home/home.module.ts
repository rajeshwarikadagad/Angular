import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableListsComponent } from './table-lists/table-lists.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './common/shared.module';
import { DisplayCodeComponent } from './display-code/display-code.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';



@NgModule({
  declarations: [
    HomeComponent,
    TableListsComponent,
    DisplayCodeComponent,
    MyProgramsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
  ]
})
export class HomeModule { }
