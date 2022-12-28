import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweriesComponent } from './breweries.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrewerResolver } from './brewer-resolver.service';


@NgModule({
	declarations: [
		BreweriesComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: BreweriesComponent,
				resolve: {
					breweries: BrewerResolver
				}
			}
		])
	]
})
export class NewsModule {
}
