import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-breweries',
	templateUrl: './breweries.component.html',
	styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {
    readonly breweries$: Observable<any[]> = this._activatedRoute.data.pipe(map(({breweries}) => breweries))
	constructor(
		private _httpClient: HttpClient,
		private _activatedRoute: ActivatedRoute
	) {
	}

	ngOnInit() {

	}
}
