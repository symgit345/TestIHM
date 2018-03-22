import { Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  	selector: 'app-accueil',
  	templateUrl: './accueil.component.html'
})


export class AccueilComponent implements OnInit {

  	constructor(title: Title, meta: Meta) {
		  title.setTitle('TestIHM');
		  meta.addTag({ name: 'author', content: 'IHM' });
	}

  title:string = "the title";
  // Ajout testu
  navbarCollapse = true; // appelé une propriété

  ngOnInit() { } // appelé une méthode

  toggleNavbar() {
    this.navbarCollapse = !this.navbarCollapse;
  }

  // Ajout testu

}
