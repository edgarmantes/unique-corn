import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiphyService } from '../../app/services/giphy.service';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {

 	items: any; 

	constructor(public navCtrl: NavController, private giphyService:GiphyService) {

	}


	getPosts(value: string) {
		let query = value;

		let limit = 20;
		this.giphyService.getPosts(query, limit).subscribe(response => {
			// console.log(response)
			this.items = response.data;
		})
	}

}
