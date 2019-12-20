import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
	
	private _http : HttpService;
	private _route : ActivatedRoute;
	private _router : Router;
	public errors: any = {};
	public restaurant : any = {};
	public getOne : any = {}

	constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
		this._http = httpService;
		this._route = route;
		this._router = router;
	}

	ngOnInit() : void {
		this._route.params.subscribe((params: Params) => {
			console.log(params['_id']);
			const restaurantObservable : Observable<any> = this._http.getOne(params['_id']);
			restaurantObservable.subscribe( res => this.restaurant = res);
		});
	}

	update(_id) {
		let restaurantObservable : Observable<any> = this._http.updateRestaurant(_id, this.restaurant);
		restaurantObservable.subscribe( res => {
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