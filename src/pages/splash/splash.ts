import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

	constructor(public navCtrl: NavController) {

	}

	enter(){

		this.navCtrl.push(TabsPage, {});
	}

}
