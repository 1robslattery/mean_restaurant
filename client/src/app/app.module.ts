import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { StarsComponent } from './stars/stars.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
	declarations: [ AppComponent, ListComponent, NewComponent, StarsComponent, EditComponent, ReviewComponent],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
	providers: [ HttpService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
