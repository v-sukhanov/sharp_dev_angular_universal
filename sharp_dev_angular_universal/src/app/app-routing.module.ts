import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
	},
	{
		path: 'news',
		loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule),
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
