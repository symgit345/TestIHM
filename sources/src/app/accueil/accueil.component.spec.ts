import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AccueilComponent } from './accueil.component';


describe('AccueilComponent', (title, meta) => {

    beforeEach(() => {

    TestBed.configureTestingModule({ // Besoin pour tester le click
       declarations: [ AccueilComponent ],

    });

  });
  
  // Propriété
  it('tester si la méthode est égale à une valeur donnée (string, number, etc...)', () => {
    const menu: AccueilComponent = new AccueilComponent();
    expect(menu.test2).toBe("salut");
  });

  it('tester si la méthode est définie avec une valeur (pas de params)', () => {
    const menu: AccueilComponent = new AccueilComponent();
    expect(menu.test2).toBeDefined();
  });


  // Méthode
  it('tester si la méthode existe', () => {
    const menu: AccueilComponent = new AccueilComponent();
    expect(menu.toggleNavbar)
      .not.toBeNull();
  });

  it('tester le résultat de la fonction après exécution de celle-ci', () => {
    const menu: AccueilComponent = new AccueilComponent();
    menu.toggleNavbar();
    expect(menu.navbarCollapse)
      .toBe(false);
    menu.toggleNavbar();
    expect(menu.navbarCollapse)
      .toBe(true);
  });


  // Tester le DOM + click sur un button (besoin de la déclaration en haut du test)
  it('should toggle the class on click', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const element = fixture.nativeElement;

    fixture.detectChanges();

    const navbarCollapsed = element.querySelector('#navbar');
    expect(navbarCollapsed).not.toBeNull('No element with the id `#navbar`');
    expect(navbarCollapsed.classList).toContain('collapse', 'The element with the id `#navbar` should have the class `collapse`');

    const button = element.querySelector('button');
    expect(button).not.toBeNull('No `button` element to collapse the menu');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const navbar = element.querySelector('#navbar');
    expect(navbar.classList).not
      .toContain('collapse', 'The element with the id `#navbar` should have not the class `collapse` after a click');
  });
});





