import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiphyService } from '../../app/services/giphy.service';
import { QuoteService } from '../../app/services/quote.service';
import { GifPage } from '../gif/gif';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 	items: any; 
 	joke: any;

	constructor(public navCtrl: NavController, private giphyService:GiphyService, private quoteService:QuoteService) {

	}

	ngOnInit(){
		this.getPosts('unicorns', 30)
	}

	// API call to Giphy
	getPosts(category, limit) {
		this.giphyService.getPosts(category, limit).subscribe(response => {

			this.items = response.data;
		})
	}

	doInfinite(infiniteScroll) {

		let next = this.items.length + 15 // grabs +15 over the amount in the items object

		this.giphyService.getPosts('unicorns', next).subscribe(response => {
			
			response.data.forEach( (item,i) => {
				
				if (i>this.items.length){
					
					this.items.push(item)  // pushes each new item in to items object
				}
				
			})

			infiniteScroll.complete(); // ends the infinite 
		})

	}

	viewGif(item) {

		this.navCtrl.push(GifPage, {
			item:item,
		});

	}


}
