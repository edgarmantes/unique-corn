import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { SplashPage } from '../pages/splash/splash';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { GifPage } from '../pages/gif/gif';
import { TrendingPage } from '../pages/trending/trending';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    HomePage,
    SearchPage,
    GifPage,
    TrendingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule, // Needed for Service API calls
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    HomePage,
    SearchPage,
    GifPage,
    TrendingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
