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

	ngOnInit(){
		this.getPosts('unicorns', 30)
	}

	getPosts(category, limit) {
		this.giphyService.getPosts(category, limit).subscribe(response => {
			console.log(response)
			this.items = response.data;
		})
	}

}
