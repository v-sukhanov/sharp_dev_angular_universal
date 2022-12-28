import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, pipe, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class BrewerResolver implements Resolve<any[]> {
	constructor(
		private _httpClient: HttpClient,
		@Inject(PLATFORM_ID) private _platformI: any,
		private _transferState: TransferState
	) {
	}

	resolve(route: ActivatedRouteSnapshot,
	        state: RouterStateSnapshot,
	): Observable<any[]> {
		const COURSE_KEY = makeStateKey<any[]>('breweries');
		if (this._transferState.hasKey(COURSE_KEY)) {
			const breweries = this._transferState.get<any[]>(COURSE_KEY, []);
			this._transferState.remove(COURSE_KEY);
			return of(breweries);
		} else {
			return this._httpClient.get<any[]>('https://api.openbrewerydb.org/breweries')
				.pipe(
					tap(breweries => {
						if (isPlatformServer(this._platformI)) {
							this._transferState.set(COURSE_KEY, breweries);
						}
					})
				)
		}
	}
}
