import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuoteService {
	http:any;
	baseUrl: String;

	constructor(http:Http) {
		this.http = http;
		this.baseUrl = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
	}

	getPosts(){
		return this.http.get(this.baseUrl)
			.map(res => res);
	}
}