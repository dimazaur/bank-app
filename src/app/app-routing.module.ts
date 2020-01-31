import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DataTableComponent } from './data-table/data-table.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: '', component: AppComponent, children:[
    {path: '', component:DataTableComponent},
    {path: ':id', component:ItemComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
