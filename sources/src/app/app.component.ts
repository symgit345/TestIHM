import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { ItemService } from './services/item.service';

@Component({
    selector: 'app-ihm',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    user: Observable < firebase.User > ;
    isLogged: Boolean;
    userName: String;
    userCoins: number;
    testMembers: any[];
    subscribeObserver: any;

    constructor( public authService: AuthService, public afAuth: AngularFireAuth, private itemService: ItemService) { }

    ngOnInit () {
         this.user = this.authService.afAuth.authState;
         let userConnected = this.user.subscribe((auth) => {
            if (auth) {        
                this.isLogged = true;
                // Lancer une requete sur la table members et récupérer coins et name                
                this.subscribeObserver = this.itemService.getTestMembers(auth.uid).subscribe(testMembers => {
                    this.testMembers = testMembers;
                    this.userName = (JSON.stringify(testMembers[0].name)).replace(/['"]+/g, '');
                    this.userCoins = testMembers[0].unicoin;
                    
                });
            } else {               
                this.isLogged = false;
            }

        });
    }

    ngOnDestroy() {
        console.log('onDestroy');
        this.subscribeObserver.unsubscribe();
    }
}