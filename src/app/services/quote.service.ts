import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuoteService {
	http:any;
	baseUrl: String;

	constructor(http:Http) {
		this.http = http;
		this.baseUrl = "http://sunnyquotes.net/q.php?random";
	}

	getPosts(){
		return this.http.get(this.baseUrl)
			.map(res => res.json());
	}
}