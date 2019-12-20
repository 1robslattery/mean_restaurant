console.log("new.ts is running");
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

	private _http : HttpService;
	private _router : Router;
	public restaurant : any = {};
	public errors : any = {}

	constructor(http : HttpService, router: Router) {
		this._http = http;
		this._router = router;
	}

	ngOnInit() {
	}

	createRestaurant() {
		const restaurantObservable : Observable<any> = this._http.createRestaurant(this.restaurant);
		restaurantObservable.subscribe( res => {
			console.log(res);
			if(res.errors) {
        		this.errors = res.errors;
			} else {
				this._router.navigate(['/']);
			}
    	});
	}
}