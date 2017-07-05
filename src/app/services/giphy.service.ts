import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class GiphyService {
	http: any;
	baseUrl: String;

	constructor(http:Http) {
		this.http = http;
		this.baseUrl = "http://api.giphy.com/v1/gifs/search?"

	}

	getPosts(category, limit){
		return this.http.get(this.baseUrl+'q='+category+'&api_key=dc6zaTOxFJmzC&limit='+limit)
			.map(res => res.json());
	}
}