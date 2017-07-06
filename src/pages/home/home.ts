import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiphyService } from '../../app/services/giphy.service';
import { GifPage } from '../gif/gif';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 	items: any; 
 	joke: any;

	constructor(public navCtrl: NavController, private giphyService:GiphyService) {

	}

	// loads first 30 unicorns
	ngOnInit(){
		this.getPosts('unicorns', 30)
	}

	// API call to Giphy
	getPosts(category, limit) {
		this.giphyService.getPosts(category, limit).subscribe(response => {

			this.items = response.data;
		})
	}

	// pass in the infiniteScroll object
	doInfinite(infiniteScroll) {

		let next = this.items.length + 15 // grabs +15 over the amount in the items object

		// grabs the next 10 unicorns in the database
		this.giphyService.getPosts('unicorns', next).subscribe(response => {
			
			response.data.forEach( (item,i) => {
				
				if (i>this.items.length){				
					this.items.push(item)  // pushes each new item in to items object
				}
				
			})

			infiniteScroll.complete(); // ends the infinite 
		})

	}

	// When gif is clicked it will push that item and navigate to the GifPage giving access to 'item'
	viewGif(item) {

		this.navCtrl.push(GifPage, {
			item:item,
		});

	}


}
