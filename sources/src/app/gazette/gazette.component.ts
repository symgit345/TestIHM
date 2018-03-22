import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/Item';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable} from 'rxjs/Rx';


@Component({
    selector: 'app-items',
    templateUrl: 'gazette.component.html',
    styleUrls: ['./gazette.component.scss']
})


export class GazetteComponent {

    items: Item[]; // La liste des licornes

    pageID: number; // Id page actuelle
    pageIDNext: number; // Id next page
    pageIDBefore: number; // Id previous page

    numberPages = []; // Nombres de Pages de licornes
    countPages: number;
    numberUnicorns: number; // Nombre total de licornes
    listUnicorns = []; // Les 2 licornes sélectionnés par pagination
    private sub: any;
 
    // Loader
    showSpinner: boolean = true;

    // Info user
    user: any;
    userCoins: any;
    userName: string;
    userUid: any;
    userId: any;

    // Modal Popup
    popupBuy: boolean = false;
    popupDestroy: boolean = false;
    itemToEdit: any; 

 
    constructor(public authService: AuthService, public itemService: ItemService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
        let self = this;

        this.sub = this.route.params.subscribe(params => {
            // Id URL
            this.pageID = parseInt(this.route.snapshot.params['id']);
            // Id Page Next
            this.pageIDNext = this.pageID + 1;
            // Récupérer toutes les licornes de la BDD
            this.itemService.getTestLength().subscribe(itemLength => {
                this.items = itemLength;
                // Sélectionner licorne pagination (2 par pages)
                this.listUnicorns = [];
                itemLength.forEach(function(element, i) {
                    if ((i + 1) == (self.pageID * 2)) {
                        self.listUnicorns.push(element);
                    } else if ((i + 1) == ((self.pageID * 2) - 1)) {
                        self.listUnicorns.push(element);
                    }
                });
                // Pagination
                var nombreLicornesTotal = itemLength.length;
                var nombrePages = Math.ceil(nombreLicornesTotal / 2);
                this.countPages = nombrePages;
                this.numberPages = new Array(nombrePages);
                this.numberUnicorns = itemLength.length;
                this.showSpinner = false;
            });
        });             
    }
 
    buyUnicorn(item) {
        var that = this;
        // table licorne
        this.itemService.updateUnicorn1( {
            selled: true,
            id: item.id
        })
        .then(function(something) {
             console.log('ok buy');
        })
        .catch(function(something) {
             console.log('catchComponent' + something);
        });     
    }
        
    destroyUnicorn(item){
        let that = this;

        // Connexion User récupération infos
        this.user = this.authService.afAuth.authState;
        let sub2 = this.user.subscribe((auth) => {
            if (auth) {
                this.itemService.getTestMembers(auth.uid).subscribe(testMembers => {
                    this.userCoins = (JSON.stringify(testMembers[0].unicoin)).replace(/['"]+/g, '');
                    this.userName = (JSON.stringify(testMembers[0].name)).replace(/['"]+/g, '');
                    this.userUid = (JSON.stringify(testMembers[0].uid)).replace(/['"]+/g, '');
                    this.userId = (JSON.stringify(testMembers[0].id)).replace(/['"]+/g, '');
                });
            }
        });

        if( this.userCoins > item.price) {
            // table licorne
            this.itemService.updateUnicorn1( {
                statut: "destroyed",
                ownerName: this.userName,
                ownerId: this.userUid,
                id: item.id
            })
            .then(function(something) {

                 //table membre
                 let newUserMoney: number = that.userCoins - item.price;
                 that.itemService.updateMoneyMember({
                     unicoin: newUserMoney,
                     id: that.userId,
                     unicornId: item.id
                 })
                 .then(function(something) {
                // Add Licornes in the player
                 console.log('pas ok function 1');

                }).catch(function(something) {
                 console.log('function 2 pas ok' + something);
                });
            })
            .then(function(something) {
                // Add Licornes in the player
                 console.log('function then 2' + something);

            })
            .catch(function(something) {
                 console.log('catchComponent' + something);
            });
        }
        sub2.unsubscribe();
    };

    // Destruction Licorne
    openPopupDestroy (item, i) {
        // clean State
        this.closeAllPopups();
        // open popup
        this.popupDestroy = true;
        this.itemToEdit = i;
    }
    openPopupBuy (item, i) {
        // clean State
        this.closeAllPopups();
        // open popup
        this.popupBuy = true;
        this.itemToEdit = i;
    }
    closeAllPopups() {
        this.popupDestroy = false;
        this.popupBuy = false;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}