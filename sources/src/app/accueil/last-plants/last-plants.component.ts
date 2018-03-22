import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
    selector: 'app-last-plants',
    templateUrl: './last-plants.component.html',
    styleUrls: ['./last-plants.component.scss']
})


export class LastPlantsComponent implements OnInit {

 	items: any;
    private sub: any;

  	constructor(public itemService: ItemService) { }

    ngOnInit() {
        this.sub = this.itemService.getLastUnicorns().subscribe(items => {
            this.items = items; 
        });
    }	

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}