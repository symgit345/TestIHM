import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

// Connexion normal test
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent  {

	@Input() isLogged: any; 
	@Input() userName: any;
	@Input() userCoins: any;
	
  	constructor() { }


  	disconnectUser(): void {
	 	firebase.auth ().signOut ().then (function () {
  		console.log("deconnexion reussie");
 		}).catch (function (error) {
   			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
 		});
	}

}
