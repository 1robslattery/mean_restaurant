import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {

	private _http : HttpService;
	private _route : ActivatedRoute;
	private _router : Router;
	public restaurant : any = {};
	public review : any = {stars: 3};
	public errors : any = {};
	public getOne : any = {}

	constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
		this._http = httpService;
		this._route = route;
		this._router = router;
	}
	
	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
			console.log(params['_id']);
			const restaurantObservable : Observable<any> = this._http.getOne(params['_id']);
			restaurantObservable.subscribe( res => this.restaurant = res);
	
		});
	}

	leaveReview(_id) {
		let myreviewObservable: Observable<any> = this._http.review(_id, this.review);
		myreviewObservable.subscribe( res => {
			console.log(res);
			if(res.errors) {
        		this.errors = res.errors;
			} else {
				this._router.navigate(['/']);
			}
		});
	}

	cancel() {
		this.getOne = false;
	}

}