import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Error404Component }     from './shared/error404/error404.component';

// Authentification Firebase
import { LoginComponent }   from './membership/login/login.component';
import { RegisterComponent }   from './membership/register/register.component';
import { MemberShipComponent }   from './membership/membership.component'; 
import { AccueilComponent } from './accueil/accueil.component'; 
import { GazetteComponent }    from './gazette/gazette.component';

// routes
const appRoutes: Routes = [
	{ path: 'membership', component: MemberShipComponent },
	{ path: 'market', component: GazetteComponent },
	{ path: 'market/:id', component: GazetteComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'home', component: AccueilComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: '**', component: Error404Component }
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
