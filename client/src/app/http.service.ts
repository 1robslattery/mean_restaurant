console.log("app-http-svc.js is running");

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	private _httpClient : HttpClient;

	constructor(httpClient : HttpClient) {
		this._httpClient = httpClient;
	}

 	getAllRestaurants() : Observable<any> {
		return this._httpClient.get("/restaurants");
	}

 	createRestaurant(restaurant : any) {
		return this._httpClient.post("/restaurants", restaurant);
	}

 	getOne(_id : string) : Observable<any> {
		return this._httpClient.get(`/restaurants/${_id}`);
	}

	starRestaurant(_id : string, star : string) : Observable<any> {
		return this._httpClient.put( `/star/${_id}`, star);
	}

	deleteRestaurant(_id : string) : Observable<any> {
		return this._httpClient.delete(`/restaurants/${_id}`);
	}

 	likeRestaurant(_id : string) : Observable<any> {
		return this._httpClient.put( `/like/${_id}`, this.likeRestaurant);
	}

	updateRestaurant(_id: any, restaurantData: any) {
		return this._httpClient.put(`/restaurants/${_id}`, restaurantData);
	}

	review(_id: string, review: any): Observable<any> {
		return this._httpClient.post(`/review/${_id}`, review);
		
  }
}

//  	likeRestaurant(_id : string) : Observable<any> {
// 		return this._httpClient.put( `/like/${_id}`, this.likeRestaurant);
// 	}

// 	updateRestaurant(_id: any, restaurantData: any) {
// 		return this._httpClient.put(`/restaurants/${_id}`, restaurantData);
// 	}

// 	review(_id: string, review: any): Observable<any> {
// 		return this._httpClient.post(`/review/${_id}`, review);
		
//   }