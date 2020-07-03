webpackJsonp([13],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]
            ]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_service_language_service__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, langserv) {
        this.navCtrl = navCtrl;
        this.langserv = langserv;
        var date = new Date();
        this.year = date.getFullYear();
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.changelang = function (lang) {
        this.langserv.changelang(lang);
        // this.navCtrl.setRoot('HomePage');
        this.navCtrl.setRoot('HomePage');
        // this.app.getRootNavs()[0].setRoot('HomePage');
        // this.navCtrl.root = 'HomePage';
        // console.log(this.navCtrl.root = 'HomePage')
    };
    IntroPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    IntroPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    IntroPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    IntroPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    IntroPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    IntroPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    IntroPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/intro/intro.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Select Language</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="container">\n    <img src="./assets/imgs/wgs-logo1.png">\n    <h3>{{ \'appname\' | translate }}</h3>\n    <div class="links">\n      <p>Select Language</p>\n      <a (click)="changelang(\'en\')" href="javascript:void(0)">English</a>\n      <a (click)="changelang(\'shi\')" href="javascript:void(0)">සිංහල</a>\n      <!-- <a (click)="changelang(\'tr\')" href="javascript:void(0)">عربى</a> -->\n    </div>\n  </div>\n  <div class="footer">\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="./assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="./assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_language_service_language_service__["a" /* LanguageServiceProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=13.js.map