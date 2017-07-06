import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiphyService } from '../../app/services/giphy.service';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {

 	items: any; 
	
	item: any;
	tags:any;

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

	getInfo(item){
				
		let slug = "#"+item.slug;

		let reg = /[-]/g;
		this.tags = slug.replace(reg, ' #')
		return this.tags
	}

}
