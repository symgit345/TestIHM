import { Component, Input } from '@angular/core';

import * as firebase from 'firebase';
import { userRegistration } from '../../models/userRegistration';
import { ItemService } from '../../services/item.service';

class User {
    username: string;
    password: string;
}

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    constructor( private itemService: ItemService) {}

    item3: userRegistration = {
        name: '',
        email: '',
        pswd: '',
        uid: '',

    }
    user = new User();
    self= this;

    createUser(users) {
        var self= this;

        // 1° Creation du user dans la base authentification
        firebase.auth().createUserWithEmailAndPassword(users.email, users.password).then(function(test) {
            
            // 2° Ajout de l'utilisateur dans la base client
            let user = firebase.auth().currentUser;

            self.item3.name = users.username;
            self.item3.pswd = users.password;
            self.item3.email = user.email;
            self.item3.uid = user.uid;

            self.onAddMembers();

        }).catch(function(error) {
            var errorCode = error.code; var errorMessage = error.message; console.log(errorCode); console.log(errorMessage);
        });
    }

    // add member auth in members base de donnees cliens
    onAddMembers() {
        this.itemService.addMember(this.item3);
        // Vider champs
        this.item3.name = '';
        this.item3.pswd = '';
        this.item3.email = '';
        this.item3.uid = '';     
    }
}