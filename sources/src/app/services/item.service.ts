import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';

@Injectable() export class ItemService {

    itemsCollection: AngularFirestoreCollection < Item > ;
    itemsCollectionMember: AngularFirestoreCollection < Item > ;

    items: Observable < Item[] > ;
    itemDoc: AngularFirestoreDocument < Item > ;
    itemDoc2: AngularFirestoreDocument < Item > ;
    testMembers: any;
    itemLength: any;
    items2: any ;
    items3: any ;
    itemsUser: any;


    constructor(public afs: AngularFirestore) {
        this.itemsCollection = this.afs.collection('unicorns');
        this.itemsCollectionMember = this.afs.collection('members');
    }

    // Fonctions Membership
    // Récupère données du membre
    getTestMembers(idUser) {
    
        this.items3 = this.afs.collection('members', ref => ref.where('uid', '==', idUser)).snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Item;
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.items3;
    }

    getUnicornMembership(unicornId){
        this.items = this.afs.collection('unicorns', ref => ref.where('id', '==', unicornId)).valueChanges();

        return this.items;
    }

     // Fonctions Gazette
    getTestLength() {

        this.items2 = this.afs.collection('unicorns', ref => ref.where('selled', '==', false)).snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Item;
                data.id = a.payload.doc.id;
                return data;
            });
        });
      return this.items2;
    }

     // Marque la plante comme détruite
    updateUnicorn2(item) {
        this.itemDoc = this.afs.doc(`unicorns/${item.id}`);
        return this.itemDoc.update(item).then(function(error) {
        }).catch(function(error) {
        });
    }

    // Destruction plante
    updateUnicorn1(item) {
      var self = this;
      return new Promise((resolve,reject)=>{ 
        self.itemDoc = self.afs.doc(`unicorns/${item.id}`);
        self.itemDoc.update(item)
        .then(()=>{ 
            resolve({success :true});
        })
        .catch((err)=>{ 
            reject(err); 
        }); 
    }); 
  }

  // Destruction licorne
  updateMoneyMember(item) {
        var self = this;
        
        return new Promise((resolve,reject)=>{ 
          self.itemDoc = self.afs.doc(`members/${item.id}`);
          self.itemDoc.update(item)
          .then(()=>{ 
              resolve({success :true}); 
          })
          .catch((err)=>{ 
              reject(err); 
          }); 
      }); 
    }

    // Fonctions Accueil
    getLastUnicorns() {
        this.items = this.afs.collection('unicorns', ref => ref.limit(2)).valueChanges();
        console.log(this.items);
        return this.items;
    }

   

    getMembersId() {
      // Members
        this.itemsUser = this.afs.collection('members').snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Item;
                data.id = a.payload.doc.id;
                return data;
            });
        });
       return this.itemsUser;
    }

    // Suppression licorne
    deleteUnicorn(item) {
        this.itemDoc2 = this.afs.doc(`unicorns/${item.id}`);
        this.itemDoc2.delete();
    }
   

    // Fonctions Register
    // Ajouter l'utilisateur crée dans la table members
    addMember(item: Item) {
        this.itemsCollectionMember.add(item).then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    deleteItem(item: Item) {
        this.itemDoc = this.afs.doc(`items/${item.id}`);
        this.itemDoc.delete();
    }
    addItem(item: Item) {
        this.itemsCollection.add(item);
    }
    getTest2() {
        this.items = this.afs.collection('unicorns', ref => ref.orderBy("name").endBefore("Unicorn3").limit(2)).valueChanges();
        return this.items;
    }


}