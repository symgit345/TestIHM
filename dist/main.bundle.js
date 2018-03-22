webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/accueil/accueil.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\t<app-last-plants></app-last-plants>\n</div>"

/***/ }),

/***/ "../../../../../src/app/accueil/accueil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccueilComponent = (function () {
    function AccueilComponent(title, meta) {
        this.title = "the title";
        // Ajout testu
        this.navbarCollapse = true; // appelé une propriété
        title.setTitle('TestIHM');
        meta.addTag({ name: 'author', content: 'IHM' });
    }
    AccueilComponent.prototype.ngOnInit = function () { }; // appelé une méthode
    AccueilComponent.prototype.toggleNavbar = function () {
        this.navbarCollapse = !this.navbarCollapse;
    };
    AccueilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accueil',
            template: __webpack_require__("../../../../../src/app/accueil/accueil.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */]])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accueil/accueil.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_component__ = __webpack_require__("../../../../../src/app/accueil/accueil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__last_plants_last_plants_component__ = __webpack_require__("../../../../../src/app/accueil/last-plants/last-plants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Materialize Test




var AccueilModule = (function () {
    function AccueilModule() {
    }
    AccueilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatNativeDateModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__accueil_component__["a" /* AccueilComponent */],
                __WEBPACK_IMPORTED_MODULE_4__last_plants_last_plants_component__["a" /* LastPlantsComponent */]
            ],
            providers: []
        })
    ], AccueilModule);
    return AccueilModule;
}());



/***/ }),

/***/ "../../../../../src/app/accueil/last-plants/last-plants.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"last-unicorns container\">\n\tBienvenue sur l'IHM Gestion des Plantes :<br />\n\t <a class=\"\" routerLink=\"/market/1\" >Accéder à la liste des plantes</a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/accueil/last-plants/last-plants.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".last-unicorns {\n  margin-bottom: 70px;\n  padding-top: 70px;\n  text-align: center; }\n  .last-unicorns img {\n    width: 65%; }\n  .last-unicorns .unicorn-card {\n    text-align: center; }\n    .last-unicorns .unicorn-card .unicorn-card-detail {\n      background: #d1eeeb;\n      border-radius: 15px;\n      display: block;\n      margin: 0 auto; }\n      .last-unicorns .unicorn-card .unicorn-card-detail img {\n        width: 80%;\n        margin-top: 15px;\n        margin-bottom: 25px; }\n      .last-unicorns .unicorn-card .unicorn-card-detail .price-zone {\n        padding-top: 15px; }\n        .last-unicorns .unicorn-card .unicorn-card-detail .price-zone img {\n          width: 15px;\n          margin: 0 12px 0 0;\n          vertical-align: baseline; }\n        .last-unicorns .unicorn-card .unicorn-card-detail .price-zone p {\n          margin: 0;\n          padding: 5px 20px;\n          background-color: #e8f7f5;\n          border-radius: 30px;\n          font-size: 0.5rem;\n          display: inline-block; }\n        .last-unicorns .unicorn-card .unicorn-card-detail .price-zone .price:after {\n          content: '';\n          position: absolute;\n          left: 46%;\n          top: 47px;\n          width: 0;\n          height: 0;\n          border-left: 10px solid transparent;\n          border-right: 10px solid transparent;\n          border-top: 10px solid #e8f7f5;\n          clear: both; }\n    .last-unicorns .unicorn-card .name {\n      font-size: 0.6rem;\n      font-weight: bold;\n      text-align: left; }\n\n.detailproject {\n  margin-top: 20px;\n  background: #f8f8f8;\n  border-top: 1px solid darkgray;\n  box-shadow: inset 0px 11px 8px -10px darkgray, inset 0px -11px 8px -10px darkgray; }\n\n.explications p {\n  color: #5e5e5e;\n  font-size: 0.6rem;\n  padding-left: 20px;\n  padding-top: 35px; }\n\n.explications img {\n  margin-top: 10px;\n  width: 100%;\n  margin-bottom: 5px; }\n\n.explications .textdetail {\n  margin-top: 75px; }\n\n.ak-btn-big:hover, .ak-btn-big:focus {\n  background: linear-gradient(to bottom, #fbec95 1%, #fce874 7%, #fcdd10 14%, #f8b50c 41%, #f8b50c 52%, #f8b50c 88%, #fcdd10 99%); }\n\n.ak-btn-big {\n  text-align: center;\n  box-shadow: 0 1px 2px 0 #000000;\n  border: 1px solid orange;\n  background: linear-gradient(to bottom, #f7e199 1%, #f9db77 7%, #fac612 14%, #f19e12 41%, #f19e12 52%, #f19e12 88%, #fac612 99%);\n  color: white !important;\n  font-weight: bold;\n  font-size: 0.5rem;\n  display: block;\n  width: 25%;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accueil/last-plants/last-plants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastPlantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LastPlantsComponent = (function () {
    function LastPlantsComponent(itemService) {
        this.itemService = itemService;
    }
    LastPlantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.itemService.getLastUnicorns().subscribe(function (items) {
            _this.items = items;
        });
    };
    LastPlantsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LastPlantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-last-plants',
            template: __webpack_require__("../../../../../src/app/accueil/last-plants/last-plants.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accueil/last-plants/last-plants.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */]])
    ], LastPlantsComponent);
    return LastPlantsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_error404_error404_component__ = __webpack_require__("../../../../../src/app/shared/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__membership_login_login_component__ = __webpack_require__("../../../../../src/app/membership/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_register_register_component__ = __webpack_require__("../../../../../src/app/membership/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__membership_membership_component__ = __webpack_require__("../../../../../src/app/membership/membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accueil_accueil_component__ = __webpack_require__("../../../../../src/app/accueil/accueil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gazette_gazette_component__ = __webpack_require__("../../../../../src/app/gazette/gazette.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Authentification Firebase





// routes
var appRoutes = [
    { path: 'membership', component: __WEBPACK_IMPORTED_MODULE_5__membership_membership_component__["a" /* MemberShipComponent */] },
    { path: 'market', component: __WEBPACK_IMPORTED_MODULE_7__gazette_gazette_component__["a" /* GazetteComponent */] },
    { path: 'market/:id', component: __WEBPACK_IMPORTED_MODULE_7__gazette_gazette_component__["a" /* GazetteComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__membership_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__membership_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__accueil_accueil_component__["a" /* AccueilComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__shared_error404_error404_component__["a" /* Error404Component */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav [isLogged]=\"isLogged\" [userName]=\"userName\" [userCoins]=\"userCoins\"></app-nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, afAuth, itemService) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.itemService = itemService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.afAuth.authState;
        var userConnected = this.user.subscribe(function (auth) {
            if (auth) {
                _this.isLogged = true;
                // Lancer une requete sur la table members et récupérer coins et name                
                _this.subscribeObserver = _this.itemService.getTestMembers(auth.uid).subscribe(function (testMembers) {
                    _this.testMembers = testMembers;
                    _this.userName = (JSON.stringify(testMembers[0].name)).replace(/['"]+/g, '');
                    _this.userCoins = testMembers[0].unicoin;
                });
            }
            else {
                _this.isLogged = false;
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('onDestroy');
        this.subscribeObserver.unsubscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ihm',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_share_module__ = __webpack_require__("../../../../../src/app/shared/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accueil_accueil_module__ = __webpack_require__("../../../../../src/app/accueil/accueil.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gazette_gazette_module__ = __webpack_require__("../../../../../src/app/gazette/gazette.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__membership_membership_module__ = __webpack_require__("../../../../../src/app/membership/membership.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Module




// Component

// Services 


// Firebase





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_share_module__["a" /* ShareModule */],
                __WEBPACK_IMPORTED_MODULE_5__accueil_accueil_module__["a" /* AccueilModule */],
                __WEBPACK_IMPORTED_MODULE_6__gazette_gazette_module__["a" /* GazetteModule */],
                __WEBPACK_IMPORTED_MODULE_7__membership_membership_module__["a" /* MembershipModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_item_service__["a" /* ItemService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gazette/gazette.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-list\">\n    Inventaire des plantes :\n    \n    <app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n    <div *ngIf=\"items?.length > 0;else noItems\">\n        <div class=\"menu\">\n            <div class=\"pagination\">\n            <div *ngIf=\" pageID != 1\">\n                <a routerLink=\"/market/{{pageID - 1 }}\">◄</a>\n            </div>\n            <div *ngFor=\"let item of numberPages;let i = index\" class=\"pagination\">\n                <a routerLink=\"/market/{{i+1}}\">{{i+1}}</a>\n            </div>\n            <a routerLink=\"/market/{{pageID + 1 }}\" *ngIf=\" pageID != countPages\">►</a>\n        </div>\n            <p><span>Nombre de plantes :</span> {{numberUnicorns}}</p>\n            <p><span>Page actuel </span>{{pageID}}/{{numberPages.length}}</p>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"clearfix\"></div>\n         \n        <div class=\"row container\">\n\n            <div *ngFor=\"let item of listUnicorns;let i = index\" class=\"collection col-md-3 \">\n\n                    <div class=\"unicorn-card-detail\">\n\n                        <div class=\"price-zone\">\n                            <p class=\"price\">\n                                <img src=\"../assets/images/price.png\">\n                                <b>Prix</b>\n                                = {{item.price}} BTC\n                            </p>\n                        </div>\n\n                        \n                        <img src=\"../assets/images/plante2.png\">\n                        <p *ngIf=\"item.statut  == 'destroyed' \">Statut: détruit</p>\n\n                        <div class=\"flexZone\">\n                            <div class=\"btns buy\">\n                                <span (click)=\"openPopupBuy(item, i)\">Acheter</span>\n                                <div class=\"popup popupBuy\" *ngIf=\"popupBuy && i == itemToEdit\"> \n                                    <div class=\"content\">\n                                        <p>Achetez cette plante</p>\n                                        <div class=\"action\">\n                                            <div class=\"ok\" (click)=\"buyUnicorn(item)\">OUI</div>\n                                            <div class=\"no\" (click)=\"closeAllPopups()\">NON</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                                \n                            <div class=\"btns destroy\">\n                                <span (click)=\"openPopupDestroy(item, i)\">Détruire</span>\n                                <div class=\"popup\" *ngIf=\"popupDestroy && i == itemToEdit\"> \n                                    <div class=\"content\">\n                                        <p>Détruire cette plante</p>\n                                        <div class=\"action\">\n                                            <div class=\"ok\" (click)=\"destroyUnicorn(item)\">OUI</div>\n                                            <div class=\"no\" (click)=\"closeAllPopups()\">NON</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>                  \n                        </div>\n                    </div>\n                    <p class=\"name\">Plante : {{item.name}}</p>\n                </div>\n        </div>\n    </div>\n\n    <ng-template #noItems>\n        <hr>\n        <h5>There are no items to list</h5>\n    </ng-template>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/gazette/gazette.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-list {\n  margin-top: 25px;\n  text-align: center; }\n  .card-list .logo {\n    width: 50%;\n    padding-top: 20px; }\n  .card-list .clearfix {\n    clear: both; }\n  .card-list .menu {\n    padding: 0 40px;\n    border-bottom: 2px solid #F3F1EE;\n    margin-bottom: 35px; }\n    .card-list .menu p {\n      float: right;\n      margin: 0;\n      padding: 0;\n      font-weight: bold;\n      font-size: 0.6rem;\n      padding: 8px 12px;\n      border-radius: 15px;\n      background: #F3F1EE;\n      margin-bottom: 10px; }\n      .card-list .menu p span {\n        color: gray; }\n    .card-list .menu p:first-child {\n      display: inline-block;\n      float: left; }\n  .card-list .unicorn-card-detail {\n    background: #d1eeeb;\n    border-radius: 15px;\n    display: block;\n    margin: 0 auto;\n    border: 2px solid white;\n    transition: all .15s ease-in-out; }\n    .card-list .unicorn-card-detail img {\n      width: 80%;\n      margin-top: 5px;\n      margin-bottom: 15px; }\n    .card-list .unicorn-card-detail .flexZone {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 5px 18px 20px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .card-list .unicorn-card-detail .flexZone .btns {\n        font-size: 0.7rem;\n        color: white;\n        font-weight: bold;\n        display: inline-block;\n        width: 40%;\n        padding: 8px 4px;\n        border-radius: 5px;\n        background: #FBA371;\n        border: 2px solid #0b0b0b;\n        box-shadow: inset 0 0 0 3px #FF844B; }\n        .card-list .unicorn-card-detail .flexZone .btns:hover {\n          cursor: pointer;\n          background: #FF844B; }\n        .card-list .unicorn-card-detail .flexZone .btns.buy {\n          background: #2DCC70;\n          box-shadow: inset 0 0 0 3px #1AAF5D; }\n          .card-list .unicorn-card-detail .flexZone .btns.buy:hover {\n            background: #1AAF5D; }\n    .card-list .unicorn-card-detail .popup {\n      position: absolute;\n      font-size: 0.6rem;\n      left: 0;\n      width: 100%;\n      padding: 25px;\n      bottom: 35px; }\n      .card-list .unicorn-card-detail .popup .content {\n        background: white;\n        border-top: 3px solid #FBA371;\n        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        .card-list .unicorn-card-detail .popup .content p {\n          color: black;\n          font-weight: normal;\n          margin-bottom: 5px;\n          margin-top: 15px;\n          display: block; }\n        .card-list .unicorn-card-detail .popup .content:before {\n          border-left: 20px solid transparent;\n          border-right: 20px solid transparent;\n          border-bottom: 20px solid #FF844B;\n          content: '';\n          top: 8px;\n          position: absolute;\n          left: 43%; }\n        .card-list .unicorn-card-detail .popup .content .action {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n        .card-list .unicorn-card-detail .popup .content .ok {\n          padding: 10px 0;\n          width: 50%;\n          background: white;\n          color: gray; }\n          .card-list .unicorn-card-detail .popup .content .ok:hover {\n            cursor: pointer;\n            font-weight: bold;\n            color: green;\n            text-decoration: underline; }\n        .card-list .unicorn-card-detail .popup .content .no {\n          width: 50%;\n          padding: 10px 0;\n          background: #FBA371;\n          color: white; }\n          .card-list .unicorn-card-detail .popup .content .no:hover {\n            cursor: pointer;\n            background: #FF844B;\n            font-weight: bold; }\n      .card-list .unicorn-card-detail .popup.popupBuy .content {\n        border-top: 3px solid #2DCC70; }\n        .card-list .unicorn-card-detail .popup.popupBuy .content:before {\n          border-bottom: 20px solid #2DCC70; }\n        .card-list .unicorn-card-detail .popup.popupBuy .content .no {\n          background: #2DCC70; }\n          .card-list .unicorn-card-detail .popup.popupBuy .content .no:hover {\n            background: #1AAF5D; }\n    .card-list .unicorn-card-detail .price-zone {\n      padding-top: 15px; }\n      .card-list .unicorn-card-detail .price-zone img {\n        width: 15px;\n        margin: 0 12px 0 0;\n        vertical-align: baseline; }\n      .card-list .unicorn-card-detail .price-zone p {\n        margin: 0;\n        padding: 5px 20px;\n        background-color: #e8f7f5;\n        border-radius: 30px;\n        font-size: 0.5rem;\n        display: inline-block; }\n      .card-list .unicorn-card-detail .price-zone .price:after {\n        content: '';\n        position: absolute;\n        left: 46%;\n        top: 47px;\n        width: 0;\n        height: 0;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-top: 10px solid #e8f7f5;\n        clear: both; }\n  .card-list .name {\n    font-size: 0.6rem;\n    font-weight: bold;\n    text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gazette/gazette.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GazetteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GazetteComponent = (function () {
    function GazetteComponent(authService, itemService, route, router) {
        this.authService = authService;
        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.numberPages = []; // Nombres de Pages de licornes
        this.listUnicorns = []; // Les 2 licornes sélectionnés par pagination
        // Loader
        this.showSpinner = true;
        // Modal Popup
        this.popupBuy = false;
        this.popupDestroy = false;
    }
    GazetteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.sub = this.route.params.subscribe(function (params) {
            // Id URL
            _this.pageID = parseInt(_this.route.snapshot.params['id']);
            // Id Page Next
            _this.pageIDNext = _this.pageID + 1;
            // Récupérer toutes les licornes de la BDD
            _this.itemService.getTestLength().subscribe(function (itemLength) {
                _this.items = itemLength;
                // Sélectionner licorne pagination (2 par pages)
                _this.listUnicorns = [];
                itemLength.forEach(function (element, i) {
                    if ((i + 1) == (self.pageID * 2)) {
                        self.listUnicorns.push(element);
                    }
                    else if ((i + 1) == ((self.pageID * 2) - 1)) {
                        self.listUnicorns.push(element);
                    }
                });
                // Pagination
                var nombreLicornesTotal = itemLength.length;
                var nombrePages = Math.ceil(nombreLicornesTotal / 2);
                _this.countPages = nombrePages;
                _this.numberPages = new Array(nombrePages);
                _this.numberUnicorns = itemLength.length;
                _this.showSpinner = false;
            });
        });
    };
    GazetteComponent.prototype.buyUnicorn = function (item) {
        var that = this;
        // table licorne
        this.itemService.updateUnicorn1({
            selled: true,
            id: item.id
        })
            .then(function (something) {
            console.log('ok buy');
        })
            .catch(function (something) {
            console.log('catchComponent' + something);
        });
    };
    GazetteComponent.prototype.destroyUnicorn = function (item) {
        var _this = this;
        var that = this;
        // Connexion User récupération infos
        this.user = this.authService.afAuth.authState;
        var sub2 = this.user.subscribe(function (auth) {
            if (auth) {
                _this.itemService.getTestMembers(auth.uid).subscribe(function (testMembers) {
                    _this.userCoins = (JSON.stringify(testMembers[0].unicoin)).replace(/['"]+/g, '');
                    _this.userName = (JSON.stringify(testMembers[0].name)).replace(/['"]+/g, '');
                    _this.userUid = (JSON.stringify(testMembers[0].uid)).replace(/['"]+/g, '');
                    _this.userId = (JSON.stringify(testMembers[0].id)).replace(/['"]+/g, '');
                });
            }
        });
        if (this.userCoins > item.price) {
            // table licorne
            this.itemService.updateUnicorn1({
                statut: "destroyed",
                ownerName: this.userName,
                ownerId: this.userUid,
                id: item.id
            })
                .then(function (something) {
                //table membre
                var newUserMoney = that.userCoins - item.price;
                that.itemService.updateMoneyMember({
                    unicoin: newUserMoney,
                    id: that.userId,
                    unicornId: item.id
                })
                    .then(function (something) {
                    // Add Licornes in the player
                    console.log('pas ok function 1');
                }).catch(function (something) {
                    console.log('function 2 pas ok' + something);
                });
            })
                .then(function (something) {
                // Add Licornes in the player
                console.log('function then 2' + something);
            })
                .catch(function (something) {
                console.log('catchComponent' + something);
            });
        }
        sub2.unsubscribe();
    };
    ;
    // Destruction Licorne
    GazetteComponent.prototype.openPopupDestroy = function (item, i) {
        // clean State
        this.closeAllPopups();
        // open popup
        this.popupDestroy = true;
        this.itemToEdit = i;
    };
    GazetteComponent.prototype.openPopupBuy = function (item, i) {
        // clean State
        this.closeAllPopups();
        // open popup
        this.popupBuy = true;
        this.itemToEdit = i;
    };
    GazetteComponent.prototype.closeAllPopups = function () {
        this.popupDestroy = false;
        this.popupBuy = false;
    };
    GazetteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GazetteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/gazette/gazette.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gazette/gazette.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GazetteComponent);
    return GazetteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gazette/gazette.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GazetteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gazette_component__ = __webpack_require__("../../../../../src/app/gazette/gazette.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GazetteModule = (function () {
    function GazetteModule() {
    }
    GazetteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__gazette_component__["a" /* GazetteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
            ],
            providers: []
        })
    ], GazetteModule);
    return GazetteModule;
}());



/***/ }),

/***/ "../../../../../src/app/membership/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5 .d-sm-none .d-md-block background\"></div>\n    <div class=\"col-md-7 col-sm-12 form\">\n      <h3> Se Connecter </h3>\n    <p class=\"link\">Pas encore inscrit ? <a class=\"\" routerLink=\"/register\">Register</a></p>\n        <form (ngSubmit)=\"register()\" [formGroup]=\"userForm\">\n            <div>\n                <input placeholder=\"Email\" formControlName=\"useremail\">\n                <div *ngIf=\"userForm.get('useremail').dirty &&\nuserForm.get('useremail').hasError('required')\">\n                    Username est requis\n                </div>\n                <div *ngIf=\"userForm.get('useremail').dirty &&\nuserForm.get('useremail').hasError('minlength')\">\n                    Username doit posséder au minimum 3 caractères\n                </div>\n            </div>\n            <div>\n                <input placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n                <div *ngIf=\"userForm.get('password').dirty &&\nuserForm.get('password').hasError('required')\">\n                    Password est requis\n                </div>\n            </div>\n            <button type=\"submit\" [disabled]=\"userForm.invalid\">Login</button>\n             {{items}}\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/membership/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0; }\n\np {\n  color: #5d7079;\n  margin: 0;\n  font-size: 0.8rem; }\n\n.background {\n  height: 100vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/roof.jpg") + ") center;\n  background-size: cover;\n  text-align: center; }\n\nform {\n  text-align: center;\n  width: 50%;\n  margin: 0 auto; }\n\n.error {\n  float: left;\n  margin-top: -20px;\n  height: 0;\n  font-size: 0.5rem;\n  padding-left: 5px;\n  font-weight: bold;\n  color: orange; }\n\n.form {\n  text-align: center; }\n  .form img {\n    padding: 65px 0 35px;\n    width: 125px; }\n  .form input {\n    width: 100%;\n    border-radius: 3px;\n    border: 1px solid #d3d5d8;\n    font-size: 16px;\n    padding: 8px 14px;\n    color: #2E4369;\n    margin-bottom: 20px;\n    transition: all .15s ease-in-out; }\n  .form ::-webkit-input-placeholder, .form ::-moz-placeholder, .form :-ms-input-placeholder, .form :-moz-placeholder {\n    color: #A8AAAC; }\n  .form button {\n    color: #FFF;\n    font-size: 0.7rem;\n    width: 100%;\n    padding: 8px 14px;\n    border: none;\n    border-radius: 3px;\n    border-color: #28B862;\n    background-color: #2ED06E;\n    cursor: pointer;\n    transition: all .15s ease-in-out; }\n    .form button span {\n      float: left; }\n    .form button:hover {\n      background-color: #28B862;\n      border-color: #28B862; }\n  .form input:focus {\n    border-color: #00B9FF; }\n  .form .link {\n    padding: 5px 0 35px;\n    font-size: 0.7rem; }\n    .form .link a {\n      cursor: pointer;\n      font-weight: bold;\n      color: #00B9FF;\n      text-decoration: underline; }\n      .form .link a:hover {\n        text-decoration: none; }\n  .form .slogan {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    line-height: 32px;\n    font-weight: bold;\n    color: #2e4369; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/membership/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, fb) {
        this.authService = authService;
        this.items = '';
        this.userForm = fb.group({
            useremail: fb.control('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3)]),
            password: fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required)
        });
    }
    LoginComponent.prototype.register = function () {
        var self = this;
        this.test = this.userForm.value;
        console.log(this.test.useremail);
        console.log(this.test.password);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.test.useremail, this.test.password)
            .then(function (success) {
            this.items = success;
            console.log(success);
        })
            .catch(function (error) {
            console.log("notsuccess");
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('kok' + errorCode);
            console.log('kok' + errorMessage);
            self.items = errorCode;
        });
    };
    LoginComponent.prototype.disconnectUser = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            console.log("deconnexion reussie");
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/membership/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/membership/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/membership/membership.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-2 menu\">\n\t\t<ul class=\"nav\">\n  \t\t\t<li>\n\t\t        <a class=\"active\">Mes informations</a>\n\t    \t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col-md-10 global\">\t\n\t\t<div class=\"titleZone row\">\n\t\t\t<div class=\"title col-md-3\">Espace Personnel</div>\n\t\t\t<div class=\"name col-md-9\"><span><img src=\"./assets/images/picto_adresseur.png\">{{userName}}</span></div>\n\t\t</div>\t\n\t\t<div class=\"contentZone\" >\n\t\t\t<div *ngIf=\"member?.length > 0;else noItems\">\n\t\t\t\t<div class=\"title\">Informations personnelles</div>\n\t\t\t\t<div class=\"row\" *ngFor=\"let item of member\">\n\t\t\t\t\t<ul class=\"collection col-md-4\">\n\t\t\t\t\t\t<li> <span>Nom</span><br />{{item.name}}</li>\n\t\t\t\t\t\t<li> <span>Email</span><br />{{item.email}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"collection col-md-4\">\n\t\t\t\t\t\t<li> <span>Pays</span><br />France</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"title collection col-md-4\">\n\t\t\t\t\t\tMes plantes :\n\t\t\t\t\t\t<div *ngFor=\"let item of table;\" class=\"row\">\n\t\t\t\t\t\t\t<p>{{item.name}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-template #noItems>\n\t\t\t<hr>\n\t\t\t<h5>There are no items to list</h5>\n\t\t</ng-template>\n\t</div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, .row, .global {\n  margin: 0;\n  padding: 0; }\n\n.menu {\n  padding: 0;\n  background: #37517e;\n  color: #f2f5f7; }\n  .menu .image {\n    text-align: center; }\n    .menu .image img {\n      padding: 15px 0;\n      width: 95px; }\n  .menu .nav li {\n    display: block;\n    width: 100%; }\n  .menu .nav a {\n    padding: 8px 0 8px 32px;\n    width: 100%;\n    display: block;\n    font-size: 0.7rem;\n    width: 100%;\n    border-left: 3px solid transparent; }\n    .menu .nav a:hover {\n      cursor: pointer;\n      color: #00b9ff; }\n    .menu .nav a.active {\n      border-color: #00b9ff;\n      background-color: #2e4369;\n      color: #00b9ff;\n      font-weight: bold; }\n\n.titleZone .title {\n  float: left;\n  color: #2e4369;\n  font-size: 22px;\n  line-height: 32px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-weight: 800; }\n\n.global {\n  background: #F2F5F7; }\n  .global li {\n    list-style-type: none;\n    color: #2e4369;\n    font-size: 16px;\n    margin-top: 25px; }\n    .global li span {\n      font-size: 14px;\n      color: #5d7079; }\n  .global .titleZone {\n    background: white;\n    border-bottom: 1px solid #E2E6E8;\n    padding: 0 42px; }\n    .global .titleZone .title, .global .titleZone .name {\n      margin: 0;\n      padding: 0; }\n    .global .titleZone .title {\n      font-size: 1.2rem;\n      line-height: 32px;\n      padding: 37px 0 15px;\n      font-weight: bold;\n      color: #2e4369; }\n    .global .titleZone .name {\n      padding: 37px 0 15px; }\n      .global .titleZone .name span {\n        border: 1px solid #2e4369;\n        border-radius: 15px;\n        padding: 0 20px;\n        float: right;\n        font-size: 0.7rem;\n        line-height: 25px;\n        font-weight: bold;\n        color: gray; }\n        .global .titleZone .name span img {\n          -webkit-filter: grayscale(100%);\n                  filter: grayscale(100%);\n          height: 21px;\n          margin-right: 5px;\n          vertical-align: text-top; }\n  .global .actionZone {\n    background: white;\n    border-bottom: 1px solid #E2E6E8;\n    padding: 15px 44px 17px; }\n    .global .actionZone div {\n      cursor: pointer;\n      color: #fff;\n      background-color: #2ED06E;\n      border-color: #2ED06E;\n      font-size: 0.7rem;\n      border-radius: 2px;\n      padding: 6px 11px 7px;\n      font-weight: bold; }\n      .global .actionZone div:hover {\n        background: #20914d; }\n      .global .actionZone div.money {\n        background: #51C6F3;\n        display: inline; }\n        .global .actionZone div.money:hover {\n          background: #0e9ad0; }\n      .global .actionZone div.delete {\n        background: #EA3438; }\n        .global .actionZone div.delete:hover {\n          background: #be1417; }\n      .global .actionZone div.disconnect {\n        margin-right: 20px; }\n  .global .contentZone {\n    margin: 0 44px 250px; }\n    .global .contentZone .title {\n      font-size: 0.7rem;\n      line-height: 32px;\n      margin-top: 12px;\n      font-weight: bold;\n      color: #2e4369;\n      padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberShipComponent = (function () {
    function MemberShipComponent(authService, itemService) {
        this.authService = authService;
        this.itemService = itemService;
    }
    MemberShipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.afAuth.authState;
        this.sub = this.user.subscribe(function (auth) {
            if (auth) {
                _this.sub3 = _this.itemService.getTestMembers(auth.uid).subscribe(function (member) {
                    _this.member = member;
                    _this.userName = (JSON.stringify(member[0].name)).replace(/['"]+/g, '');
                    _this.userId = member[0].id;
                    _this.userUnicorn = member[0].unicornId;
                    var numberUnicorn = _this.userUnicorn.length;
                    _this.table = [];
                    for (var i = 0; i < numberUnicorn; i++) {
                        _this.subMember = _this.itemService.getUnicornMembership(_this.userUnicorn[i]).subscribe(function (items) {
                            (_a = _this.table).push.apply(_a, items);
                            var _a;
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
    };
    MemberShipComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub3.unsubscribe();
        this.subMember.unsubscribe();
    };
    MemberShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/membership/membership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/membership/membership.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */]])
    ], MemberShipComponent);
    return MemberShipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/membership/membership.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__membership_component__ = __webpack_require__("../../../../../src/app/membership/membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/membership/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/membership/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MembershipModule = (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__membership_component__["a" /* MemberShipComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]
            ],
            providers: []
        })
    ], MembershipModule);
    return MembershipModule;
}());



/***/ }),

/***/ "../../../../../src/app/membership/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-5 .d-sm-none .d-md-block background\"></div>\n\t<div class=\"col-md-7 col-sm-12 form\">\n\t\t<h3> S'inscrire </h3>\n\t\t<p class=\"link\">Déjà inscrit ? <a class=\"\" routerLink=\"/login\">Log in</a></p>\n\t\t<form (ngSubmit)=\"createUser(userForm.value)\" #userForm=\"ngForm\">\n\t\t\t<div>\n\t\t\t\t<input placeholder=\"Pseudo\" name=\"username\" ngModel required minlength=\"1\" #username=\"ngModel\">\n\t\t\t\t<div class=\"error\" *ngIf=\"username.dirty && username.hasError('minlength')\">Username is 3</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input name=\"email\" placeholder=\"email\" ngModel required minlength=\"5\" #useremail=\"ngModel\">\n\t\t\t\t<div class=\"error\" *ngIf=\"useremail.dirty && useremail.hasError('minlength')\">Le mail doit avoir une longueur d'au moins 3 caractères</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input type=\"password\" placeholder=\"password\" name=\"password\" ngModel required #password=\"ngModel\">\n\t\t\t\t<div class=\"error\" *ngIf=\"password.dirty && password.hasError('required')\">Password is required</div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" [disabled]=\"userForm.invalid\"><span>🔒</span> Register</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/membership/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0; }\n\np {\n  color: #5d7079;\n  margin: 0;\n  font-size: 0.8rem; }\n\n.background {\n  height: 100vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/roof.jpg") + ") center;\n  background-size: cover;\n  text-align: center; }\n\nform {\n  text-align: center;\n  width: 50%;\n  margin: 0 auto; }\n\n.error {\n  float: left;\n  margin-top: -20px;\n  height: 0;\n  font-size: 0.5rem;\n  padding-left: 5px;\n  font-weight: bold;\n  color: orange; }\n\n.form {\n  text-align: center; }\n  .form img {\n    padding: 65px 0 35px;\n    width: 125px; }\n  .form input {\n    width: 100%;\n    border-radius: 3px;\n    border: 1px solid #d3d5d8;\n    font-size: 16px;\n    padding: 8px 14px;\n    color: #2E4369;\n    margin-bottom: 20px;\n    transition: all .15s ease-in-out; }\n  .form ::-webkit-input-placeholder, .form ::-moz-placeholder, .form :-ms-input-placeholder, .form :-moz-placeholder {\n    color: #A8AAAC; }\n  .form button {\n    color: #FFF;\n    font-size: 0.7rem;\n    width: 100%;\n    padding: 8px 14px;\n    border: none;\n    border-radius: 3px;\n    border-color: #28B862;\n    background-color: #2ED06E;\n    cursor: pointer;\n    transition: all .15s ease-in-out; }\n    .form button span {\n      float: left; }\n    .form button:hover {\n      background-color: #28B862;\n      border-color: #28B862; }\n  .form input:focus {\n    border-color: #00B9FF; }\n  .form .link {\n    padding: 5px 0 35px;\n    font-size: 0.7rem; }\n    .form .link a {\n      cursor: pointer;\n      font-weight: bold;\n      color: #00B9FF;\n      text-decoration: underline; }\n      .form .link a:hover {\n        text-decoration: none; }\n  .form .slogan {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    line-height: 32px;\n    font-weight: bold;\n    color: #2e4369; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/membership/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User() {
    }
    return User;
}());
var RegisterComponent = (function () {
    function RegisterComponent(itemService) {
        this.itemService = itemService;
        this.item3 = {
            name: '',
            email: '',
            pswd: '',
            uid: '',
        };
        this.user = new User();
        this.self = this;
    }
    RegisterComponent.prototype.createUser = function (users) {
        var self = this;
        // 1° Creation du user dans la base authentification
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(users.email, users.password).then(function (test) {
            // 2° Ajout de l'utilisateur dans la base client
            var user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
            self.item3.name = users.username;
            self.item3.pswd = users.password;
            self.item3.email = user.email;
            self.item3.uid = user.uid;
            self.onAddMembers();
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    };
    // add member auth in members base de donnees cliens
    RegisterComponent.prototype.onAddMembers = function () {
        this.itemService.addMember(this.item3);
        // Vider champs
        this.item3.name = '';
        this.item3.pswd = '';
        this.item3.email = '';
        this.item3.uid = '';
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/membership/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/membership/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(this.provider);
    };
    AuthService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(afs) {
        this.afs = afs;
        this.itemsCollection = this.afs.collection('unicorns');
        this.itemsCollectionMember = this.afs.collection('members');
    }
    // Fonctions Membership
    // Récupère données du membre
    ItemService.prototype.getTestMembers = function (idUser) {
        this.items3 = this.afs.collection('members', function (ref) { return ref.where('uid', '==', idUser); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.items3;
    };
    ItemService.prototype.getUnicornMembership = function (unicornId) {
        this.items = this.afs.collection('unicorns', function (ref) { return ref.where('id', '==', unicornId); }).valueChanges();
        return this.items;
    };
    // Fonctions Gazette
    ItemService.prototype.getTestLength = function () {
        this.items2 = this.afs.collection('unicorns', function (ref) { return ref.where('selled', '==', false); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.items2;
    };
    // Marque la plante comme détruite
    ItemService.prototype.updateUnicorn2 = function (item) {
        this.itemDoc = this.afs.doc("unicorns/" + item.id);
        return this.itemDoc.update(item).then(function (error) {
        }).catch(function (error) {
        });
    };
    // Destruction plante
    ItemService.prototype.updateUnicorn1 = function (item) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.itemDoc = self.afs.doc("unicorns/" + item.id);
            self.itemDoc.update(item)
                .then(function () {
                resolve({ success: true });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    // Destruction licorne
    ItemService.prototype.updateMoneyMember = function (item) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.itemDoc = self.afs.doc("members/" + item.id);
            self.itemDoc.update(item)
                .then(function () {
                resolve({ success: true });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    // Fonctions Accueil
    ItemService.prototype.getLastUnicorns = function () {
        this.items = this.afs.collection('unicorns', function (ref) { return ref.limit(2); }).valueChanges();
        console.log(this.items);
        return this.items;
    };
    ItemService.prototype.getMembersId = function () {
        // Members
        this.itemsUser = this.afs.collection('members').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.itemsUser;
    };
    // Suppression licorne
    ItemService.prototype.deleteUnicorn = function (item) {
        this.itemDoc2 = this.afs.doc("unicorns/" + item.id);
        this.itemDoc2.delete();
    };
    // Fonctions Register
    // Ajouter l'utilisateur crée dans la table members
    ItemService.prototype.addMember = function (item) {
        this.itemsCollectionMember.add(item).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    ItemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    ItemService.prototype.getTest2 = function () {
        this.items = this.afs.collection('unicorns', function (ref) { return ref.orderBy("name").endBefore("Unicorn3").limit(2); }).valueChanges();
        return this.items;
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='center'>\n      <h1>Cette page n'existe pas !</h1>\n      <a routerLink=\"/\" class=\"waves-effect waves-teal btn-flat\">\n        Retourner à l' accueil\n      </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error404',
            template: __webpack_require__("../../../../../src/app/shared/error404/error404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n    <div class=\"first-nav\">\n        <div>\n            <img src=\"./assets/images/plante2.png\">\n        </div>\n        <div *ngIf=\"isLogged != true\">\n            <a class=\"nav-item\" routerLink=\"/login\">Connexion<img src=\"./assets/images/login.png\"></a>\n            <a class=\"nav-item\" routerLink=\"/register\">Inscription<img src=\"./assets/images/registration.png\"></a>\n        </div>\n        <div *ngIf=\"isLogged == true\" class=\"activeFirstNav\">\n            <span>{{userName}} : </span>\n            <a routerLink=\"/login\">{{userCoins}} <img src=\"./assets/images/unicoin.png\"></a>\n            <span (click)=\"disconnectUser()\">Déconnexion</span>\n        </div>\n    </div>\n    <div class=\"second-nav\">\n        <ul class=\"navbar\">\n            <li>\n                <a class=\"\" routerLink=\"/home\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">Accueil</a>\n            </li>\n\n            <li>\n                <a class=\"\" routerLink=\"/market/1\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">Liste Plantes</a>\n            </li>\n            <li>\n                <a *ngIf=\"isLogged == true ;else other_content\" class=\"\" routerLink=\"/membership\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">\n                Mon compte\n                </a>\n                <ng-template #other_content>\n                    <a class=\"\" routerLink=\"/login\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">Connexion </a>\n                </ng-template>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nnav {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);\n  z-index: 4;\n  position: relative; }\n  nav .first-nav {\n    border-bottom: 1px solid #eee;\n    background: #F0FFF0;\n    display: block;\n    width: 100%;\n    padding: 0 25px;\n    font-size: 0.65rem;\n    height: 35px; }\n    nav .first-nav a {\n      color: darkgray;\n      font-weight: bold;\n      padding-left: 15px; }\n      nav .first-nav a img {\n        width: 30px;\n        padding-left: 10px; }\n    nav .first-nav div:first-child {\n      float: left; }\n      nav .first-nav div:first-child img {\n        height: 28px; }\n    nav .first-nav div:last-child {\n      float: right; }\n      nav .first-nav div:last-child a {\n        display: inline-block; }\n    nav .first-nav .activeFirstNav {\n      font-weight: bold;\n      color: gray; }\n      nav .first-nav .activeFirstNav span:last-child {\n        margin-left: 20px; }\n        nav .first-nav .activeFirstNav span:last-child:hover {\n          cursor: pointer;\n          text-decoration: underline; }\n      nav .first-nav .activeFirstNav a {\n        background: white;\n        border-radius: 15px;\n        box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);\n        margin-top: 4px;\n        padding-left: 15px; }\n        nav .first-nav .activeFirstNav a img {\n          width: 25px;\n          padding-left: 0px;\n          padding-right: 8px; }\n  nav .second-nav {\n    margin: 0 auto;\n    display: block;\n    text-align: center; }\n    nav .second-nav .logo-nav {\n      position: absolute;\n      text-align: center;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      /* compatibilité : ie9+ */ }\n      nav .second-nav .logo-nav img {\n        top: 25px;\n        width: 40%;\n        position: relative;\n        z-index: 2; }\n    nav .second-nav .navbar {\n      padding: 0.2rem 0rem;\n      margin: 0; }\n      nav .second-nav .navbar li {\n        list-style-type: none;\n        width: 130px; }\n        nav .second-nav .navbar li a {\n          padding: 10px 0;\n          text-transform: uppercase;\n          font-weight: bold;\n          font-size: 0.6rem;\n          color: gray;\n          transition: all .10s ease-in-out;\n          display: block;\n          border-bottom: 3px solid transparent; }\n          nav .second-nav .navbar li a.active {\n            color: #51C6F3;\n            text-decoration: none;\n            border-bottom: 3px solid #51C6F3; }\n          nav .second-nav .navbar li a:hover {\n            color: #51C6F3;\n            text-decoration: none;\n            border-bottom: 3px solid #51C6F3; }\n          nav .second-nav .navbar li a.ak-btn-big:hover, nav .second-nav .navbar li a.ak-btn-big:focus {\n            background: linear-gradient(to bottom, #fbec95 1%, #fce874 7%, #fcdd10 14%, #f8b50c 41%, #f8b50c 52%, #f8b50c 88%, #fcdd10 99%); }\n          nav .second-nav .navbar li a.ak-btn-big {\n            box-shadow: 0 1px 2px 0 #000000;\n            border: 1px solid orange;\n            background: linear-gradient(to bottom, #f7e199 1%, #f9db77 7%, #fac612 14%, #f19e12 41%, #f19e12 52%, #f19e12 88%, #fac612 99%);\n            color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.disconnectUser = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut().then(function () {
            console.log("deconnexion reussie");
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "isLogged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "userName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "userCoins", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error404_error404_component__ = __webpack_require__("../../../../../src/app/shared/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__ = __webpack_require__("../../../../../src/app/shared/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShareModule = (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__error404_error404_component__["a" /* Error404Component */]
            ],
            providers: []
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-cube-grid\">\n  <div class=\"sk-cube sk-cube1\"></div>\n  <div class=\"sk-cube sk-cube2\"></div>\n  <div class=\"sk-cube sk-cube3\"></div>\n  <div class=\"sk-cube sk-cube4\"></div>\n  <div class=\"sk-cube sk-cube5\"></div>\n  <div class=\"sk-cube sk-cube6\"></div>\n  <div class=\"sk-cube sk-cube7\"></div>\n  <div class=\"sk-cube sk-cube8\"></div>\n  <div class=\"sk-cube sk-cube9\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n  width: 40px;\n  height: 40px;\n  margin: 100px auto; }\n\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #333;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }\n\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s; }\n\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading-spinner',
            template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/roof.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "roof.ff99241c45ccc78744aa.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDSU65cntzXNyGwlJ2a3jAEaRUf7C9iFqQ",
        authDomain: "unicorn2-bf5f8.firebaseapp.com",
        databaseURL: "https://unicorn2-bf5f8.firebaseio.com",
        projectId: "unicorn2-bf5f8",
        storageBucket: "unicorn2-bf5f8.appspot.com",
        messagingSenderId: "391478297326"
    }
};
/*


    apiKey: "AIzaSyDSU65cntzXNyGwlJ2a3jAEaRUf7C9iFqQ",
    authDomain: "unicorn2-bf5f8.firebaseapp.com",
    databaseURL: "https://unicorn2-bf5f8.firebaseio.com",
    projectId: "unicorn2-bf5f8",
    storageBucket: "",
    messagingSenderId: "391478297326"

    apiKey: "AIzaSyDSU65cntzXNyGwlJ2a3jAEaRUf7C9iFqQ",
    authDomain: "unicorn2-bf5f8.firebaseapp.com",
    databaseURL: "https://unicorn2-bf5f8.firebaseio.com",
    projectId: "unicorn2-bf5f8",
    storageBucket: "unicorn2-bf5f8.appspot.com",
    messagingSenderId: "391478297326"


*/ 


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map