import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TrendingService {
	http:any;
	baseUrl: String;

	constructor(http:Http) {
		this.http = http;
		this.baseUrl = "http://api.giphy.com/v1/gifs/search?q=unicorn";
	}

	getPosts(){
		return this.http.get(this.baseUrl+'&api_key=dc6zaTOxFJmzC&limit=3')
			.map(res => res.json());
	}
}