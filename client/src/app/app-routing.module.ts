import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { StarsComponent } from './stars/stars.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
	{path: "", pathMatch: "full", component: ListComponent},
	{path: "edit/:_id", component: EditComponent},
	{path: "star/:_id", component: StarsComponent},
	{path: "review/:_id", component: ReviewComponent},
	{path: "new", component: NewComponent},
	{path: "restaurant/:_id", component: StarsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
