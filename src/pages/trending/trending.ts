import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrendingService } from '../../app/services/trending.service';

@Component({
  selector: 'trending',
  templateUrl: 'trending.html'
})
export class TrendingPage {

	items:any;
	
	item: any;
	tags:any;

	constructor(public navCtrl: NavController, private trendingService:TrendingService) {

	}

	ngOnInit(){
		this.getPosts();
	}

	// makes API call to get the top 3 trending unicorns
	getPosts(){

		this.trendingService.getPosts().subscribe(response => {
			this.items = response.data;	
		})
	}

	// hashing the gifs tags
	getInfo(item){
		
		let slug = "#"+item.slug;

		let reg = /[-]/g; // removes any "-" marks and replace with a hash mark
		this.tags = slug.replace(reg, ' #');
		return this.tags;
	}


}
