import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'gif',
  templateUrl: 'gif.html'
})
export class GifPage {
	
	item: any;
	tags: any;

	constructor(public navCtrl: NavController, public params:NavParams) {
		this.item = params.get('item');
		
	}

	ngOnInit(){
		let slug = "#"+this.item.slug;

		let reg = /[-]/g;
		this.tags = slug.replace(reg, ' #')
	}

}
