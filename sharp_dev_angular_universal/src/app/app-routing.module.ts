import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
	},
	{
		path: 'breweries',
		loadChildren: () => import('./features/breweries/news.module').then(m => m.NewsModule),
	},
	{
		path: '**',
		redirectTo: 'login'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		initialNavigation: 'enabledBlocking'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
