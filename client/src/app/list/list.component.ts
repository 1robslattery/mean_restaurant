import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	private _http : HttpService;
	public errors: any = [];
	public restaurants: any = [];
	public restaurant: any = [];
	public review: any = {stars: 3};

	constructor(httpService: HttpService) {
		this._http = httpService;
		this.getAllRestaurants();
}



	ngOnInit() {
		const allRestaurantsObservable: Observable<any> = this._http.getAllRestaurants();
		allRestaurantsObservable.subscribe( res => {
			this.restaurants = res.reverse();
		});
	}

	getAllRestaurants() {
		const observable : Observable<any> = this._http.getAllRestaurants();
		observable.subscribe( res => {
			this.restaurants = res.reverse();
		});
	}

	delete(_id : string) : void {
		const restaurantObservable : Observable<any> = this._http.deleteRestaurant(_id);
		restaurantObservable.subscribe(res => this.ngOnInit());
	}

}

