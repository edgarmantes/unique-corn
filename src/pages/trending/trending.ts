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

	getPosts(){
		
		this.trendingService.getPosts().subscribe(response => {
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
