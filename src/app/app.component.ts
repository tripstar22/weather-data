import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Component({
	selector: 'dv-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'dv works!';

	constructor(private restangular: Restangular) {

	}

	ngOnInit() {
		console.log(this.restangular.one('geolookup').one('forecast').one('q').one('CA').one('San_Francisco.json'));
	}
}
