import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
	RestangularProvider.setBaseUrl('http://api.wunderground.com/api/c1e81eb6e0bc3fd6');
	// RestangularProvider.setDefaultHeaders({'Authorization': 'c1e81eb6e0bc3fd6'});
}

@NgModule({
	declarations: [
		AppComponent,
		GoogleChart
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		// Importing RestangularModule and making default configs for restanglar
    	RestangularModule.forRoot(RestangularConfigFactory)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
