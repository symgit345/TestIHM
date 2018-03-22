import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-items',
  templateUrl: 'membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MemberShipComponent implements OnInit {

  user: any; // Appel service member
  member: any[]; // Model member
  userName: string; // Name member
  userUnicorn: any[]; // Liste des licornes du member
  userId: number;
  memberUnicorn: any;
  table: any[];
  private sub: any;
  private subMember: any;
  private sub3: any;

  constructor(public authService: AuthService, private itemService: ItemService) { }
  
  ngOnInit(): void {
        this.user = this.authService.afAuth.authState;
        this.sub = this.user.subscribe((auth) => {
          if (auth) {
                this.sub3 = this.itemService.getTestMembers(auth.uid).subscribe(member => {
                this.member = member;
                this.userName = (JSON.stringify(member[0].name)).replace(/['"]+/g, '');
                this.userId = member[0].id;
                this.userUnicorn = member[0].unicornId;
                
                var numberUnicorn = this.userUnicorn.length;

                this.table = [];
                 for (var i = 0; i < numberUnicorn; i++) {
                    this.subMember = this.itemService.getUnicornMembership(this.userUnicorn[i]).subscribe(items => {
                    this.table.push(...items)                  
                  });
                }
              });
          }
      });
      /*  for (var i = 0; i < this.userUnicorn.length; i++) {
        console.log('wouhou');
      }*/

      // recuperer licones que le joueur à acheté
      /*this.subMember = this.itemService.getUnicornMembership().subscribe(items => {
          this.userUnicorn = items;
      });*/
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub3.unsubscribe();
    this.subMember.unsubscribe();
  }
}