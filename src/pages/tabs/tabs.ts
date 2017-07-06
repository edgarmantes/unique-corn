import { Component } from '@angular/core';

// Components imported for each tab
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { TrendingPage } from '../trending/trending';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrendingPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
