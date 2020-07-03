webpackJsonp([19],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkApiproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HkApiproviderProvider = /** @class */ (function () {
    /*********************************************** */
    function HkApiproviderProvider(http) {
        this.http = http;
        /*   Thanks for Purchase */
        /*   Buy App From Envato Get Lifetime Updates*/
        /*   Tech Support : Whatsapp +917696355852, Skype : blackhat.ajay */
        /*******************************
       *
       *  Developer : Ajay randhawa
       *  Email : ajayrandhawartg@gmail.com
       *
       *  Please don't share this script on nulled websites
       *  Buy from Envato & appreciate Developer
       *
       * ******************************/
        /*******  CHANGE URL HERE ***************/
        // url = 'https://grocery.scurite.com';
        this.url = 'https://demogrocery.gitl.lk';
        this.token = 'dfd65117f5a90cf87c1664e5f6db4d68b2d1e70e6bc2e96f9a5e40e995b0c066';
        /****************************************/
        this.baseUrl = this.url + '/app/';
        this.imagebaseurl = this.url + '/admin/itemimg/';
        this.bannerbaseurl = this.url + '/admin/banner/';
    }
    HkApiproviderProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            _this.http.post(_this.baseUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HkApiproviderProvider.prototype.getimage = function () {
        return this.imagebaseurl;
    };
    HkApiproviderProvider.prototype.getbanner = function () {
        return this.bannerbaseurl;
    };
    HkApiproviderProvider.prototype.gettoken = function () {
        return this.token;
    };
    HkApiproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HkApiproviderProvider);
    return HkApiproviderProvider;
}());

//# sourceMappingURL=hk-apiprovider.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageServiceProvider = /** @class */ (function () {
    function LanguageServiceProvider(translate) {
        this.translate = translate;
        this.defaultlang = "en";
    }
    LanguageServiceProvider.prototype.getdefaultlang = function () {
        this.defaultlang = "en";
    };
    LanguageServiceProvider.prototype.changelang = function (lang) {
        this.translate.setDefaultLang(lang);
        console.log(this.translate.defaultLang);
    };
    LanguageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], LanguageServiceProvider);
    return LanguageServiceProvider;
}());

//# sourceMappingURL=language-service.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		324,
		18
	],
	"../pages/cart/cart.module": [
		325,
		6
	],
	"../pages/category/category.module": [
		326,
		17
	],
	"../pages/contact/contact.module": [
		327,
		16
	],
	"../pages/feedback/feedback.module": [
		328,
		15
	],
	"../pages/home/home.module": [
		329,
		14
	],
	"../pages/intro/intro.module": [
		330,
		13
	],
	"../pages/login/login.module": [
		331,
		12
	],
	"../pages/notifications/notifications.module": [
		332,
		11
	],
	"../pages/offers/offers.module": [
		333,
		5
	],
	"../pages/order-confirm/order-confirm.module": [
		334,
		4
	],
	"../pages/order-history/order-history.module": [
		341,
		10
	],
	"../pages/order-placed/order-placed.module": [
		335,
		9
	],
	"../pages/paymenttype/paymenttype.module": [
		336,
		3
	],
	"../pages/product-desc/product-desc.module": [
		337,
		2
	],
	"../pages/product-search/product-search.module": [
		342,
		1
	],
	"../pages/products/products.module": [
		338,
		0
	],
	"../pages/register/register.module": [
		339,
		8
	],
	"../pages/terms/terms.module": [
		340,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_language_service_language_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-confirm/order-confirm.module#OrderConfirmPageModule', name: 'OrderConfirmPage', segment: 'order-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-placed/order-placed.module#OrderPlacedPageModule', name: 'OrderPlacedPage', segment: 'order-placed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymenttype/paymenttype.module#PaymenttypePageModule', name: 'PaymenttypePage', segment: 'paymenttype', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-desc/product-desc.module#ProductDescPageModule', name: 'ProductDescPage', segment: 'product-desc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-history/order-history.module#OrderHistoryPageModule', name: 'OrderHistoryPage', segment: 'order-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-search/product-search.module#ProductSearchPageModule', name: 'ProductSearchPage', segment: 'product-search', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            // entryComponents: [MyApp],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_13__providers_language_service_language_service__["a" /* LanguageServiceProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, app, toastCtrl, loadingCtrl, alertCtrl, statusBar, splashScreen, langserv, translate, auth) {
        this.platform = platform;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.langserv = langserv;
        this.translate = translate;
        this.auth = auth;
        this.rootPage = 'HomePage';
        // pages: Array<{ title: string, component: any }>;
        this.apptoken = { "token": "" };
        this.initializeApp();
        this.apptoken.token = this.auth.gettoken();
        localStorage.setItem('appconfig', JSON.stringify(this.apptoken));
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova') || _this.platform.is('ios') || _this.platform.is('android')) {
                _this.statusBar.backgroundColorByHexString('#307722');
                _this.splashScreen.hide();
            }
        });
        // moving translation module here to give support while visit direct routes
        this.initTranslate();
    };
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        this.translate.setDefaultLang(this.langserv.defaultlang);
        // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        // });
    };
    MyApp.prototype.onclickHome = function () {
        this.nav.setRoot('HomePage');
    };
    MyApp.prototype.onclickcategory = function () {
        this.nav.push('CategoryPage');
    };
    MyApp.prototype.onclickMyOrder = function () {
        this.nav.push('OrderHistoryPage');
    };
    MyApp.prototype.openContact = function () {
        this.nav.push('ContactPage');
    };
    MyApp.prototype.onclickNoti = function () {
        this.nav.push('NotificationsPage');
    };
    MyApp.prototype.openfeedback = function () {
        this.nav.push('FeedbackPage');
    };
    MyApp.prototype.openoffers = function () {
        this.nav.push('OffersPage');
    };
    MyApp.prototype.openterms = function () {
        this.nav.push('TermsPage');
    };
    MyApp.prototype.openprivacy = function () {
        this.nav.push('TermsPage');
    };
    MyApp.prototype.openIntroPage = function () {
        this.nav.push('IntroPage');
    };
    MyApp.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/app/app.html"*/'<ion-menu persistent="true" [content]="content" type="overlay">\n  <ion-content class="menubar">\n    <ion-list class="mainmenu">\n\n      <div class="profile">\n        <ion-row>\n          <ion-col col-4><img src="./assets/imgs/wgs-logo1.png" alt=""></ion-col>\n          <ion-col col-8>\n            <p><a href="tel:+94777702275">+94 7777 02275</a></p>\n            <p><a href="mailto:wijesinghe@gitl.lk">wijesinghe@gitl.lk</a></p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="onclickHome()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_home\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="onclickcategory()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_category\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem" *ngIf="checkLogin()">\n        <button ion-button clear (click)="onclickMyOrder()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_myorders\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="openoffers()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_offers\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="onclickNoti()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_notifications\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem" *ngIf="checkLogin()">\n        <button ion-button clear (click)="openContact()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_contactus\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem" *ngIf="checkLogin()">\n        <button ion-button clear (click)="openfeedback()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_feedback\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="openterms()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_terms\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="openprivacy()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_privacy\' | translate }}</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="menuitem">\n        <button ion-button clear (click)="openIntroPage()" menuToggle>\n          &nbsp;&nbsp;<p>{{ \'Menupage_language\' | translate }}</p>\n        </button>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__["a" /* LanguageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map