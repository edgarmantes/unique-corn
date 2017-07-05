import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiphyService } from '../../app/services/giphy.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

	doInfinite(infiniteScroll) {
		console.log('Begin async operation');

		let next = this.items.length + 15

		this.giphyService.getPosts('unicorns', next).subscribe(response => {
			console.log(response)
			
			response.data.forEach( (item,i) => {
				
				if (i>this.items.length){
					console.log(i, this.items.length)
					this.items.push(item)
				}
				
			})

			infiniteScroll.complete(); // ends the infinite 
		})

	}


}
