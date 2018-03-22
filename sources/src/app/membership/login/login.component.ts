import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Connexion normal test
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';


@Component({
	selector: 'login',
	templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent {

	useremailCtrl: FormControl;
	passwordCtrl: FormControl;
	userForm: FormGroup;
	test:any;
	items: any = '';
	

	constructor(public authService: AuthService, fb: FormBuilder) {
		this.userForm = fb.group({
			useremail: fb.control('', [Validators.required, Validators.minLength(3)]),
			password: fb.control('', Validators.required)
		});
	}

		
	register(): void {
		var self = this;
		this.test = this.userForm.value;
		console.log(this.test.useremail);
		console.log(this.test.password);
		firebase.auth().signInWithEmailAndPassword(this.test.useremail, this.test.password)
		.then(function(success){
			this.items= success;
			console.log(success);

		})
		.catch(function(error) {
			console.log("notsuccess");
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('kok' + errorCode);
			console.log('kok' + errorMessage);
			self.items= errorCode;
		});
	}
	
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