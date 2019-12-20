import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import * as sort from 'underscore';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
	selector: 'app-stars',
	templateUrl: './stars.component.html',
  	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	private _http : HttpService;
	private _route : ActivatedRoute;
	private _router : Router;
	public restaurant : any = {};
	public review: any = {stars: 3};
	public allreviews : Array<any> = [];

	constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
		this._http = httpService;
		this._route = route;
		this._router = router;
	}

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
			console.log(params['_id']);
			const restaurantObservable : Observable<any> = this._http.getOne(params['_id']);
			restaurantObservable.subscribe(res => {
				this.restaurant = res;
				this.allreviews = sort.sortBy(this.restaurant.reviews, 'stars').reverse();
				});
		});
	}

	leaveReview(_id : string) {
		const reviewRestaurant: Observable<any> = this._http.review(_id, this.review);
		reviewRestaurant.subscribe( res => {
			console.log(res);
			this.ngOnInit();
		});
	}
}